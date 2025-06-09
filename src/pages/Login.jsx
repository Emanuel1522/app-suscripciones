import { useNavigate } from "react-router-dom";
import { tokenGenerator, generalAlert, redirectAlert } from "../helpers/functions.js"
import { useState, useEffect } from "react";
import "./Login.css"
let apiUser = "https://api-suscripciones.onrender.com/users";

const Login = () => {
    let navigate = useNavigate();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [users, setUsers] = useState([]);

    function getUsers() {
        fetch(apiUser)
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getUsers();
    }, []);

    function searchUser() {
        let userFounded = users.find(
            (user) => email == user.email && password == user.password
        );
        return userFounded;
    }

    function logIn(e) {
        e.preventDefault();
        let user = searchUser();
        if (user) {
            let token = tokenGenerator();
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("idUser", JSON.stringify(user.id));
            redirectAlert(navigate, "Bienvenido al sistema", "/home/main")
        } else {
            generalAlert("No se pudo ingresar", "Error de credenciales", "error")
        }
    }

    function registerUser(e) {
        e.preventDefault();
        let auth = users.some(
            (user) => user.name == name && user.email == email
        );
        if (auth) {
            generalAlert("No se pudo registrar", "Usuario ya existe en la base de datos", "error")
        } else {
            let user = {
                name: name,
                email: email,
                password: password,
            };
            fetch(apiUser, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            })
            .then((res) => res.json())
            .then((createdUser) => {
                let token = tokenGenerator();
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(createdUser));
                localStorage.setItem("idUser", JSON.stringify(createdUser.id));
                getUsers();
                redirectAlert(navigate, "Registro exitoso", "/home/main")
            });
        }
    }

    return (
        <div className="wrapper">
            <div className="card-switch">
                <label className="switch">
                    <input type="checkbox" className="toggle" />
                    <span className="slider"></span>
                    <span className="card-side"></span>
                    <div className="flip-card__inner">
                        <div className="flip-card__front">
                            <div className="title">Iniciar Sesion</div>
                            <form className="flip-card__form" action="">
                                <input onChange={(e) => setEmail(e.target.value)} className="flip-card__input" name="email" placeholder="Email" type="email" />
                                <input onChange={(e) => setPassword(e.target.value)} className="flip-card__input" name="password" placeholder="Password" type="password" />
                                <button onClick={logIn} className="flip-card__btn">Validar</button>
                            </form>
                        </div>
                        <div className="flip-card__back">
                            <div className="title">Registrarse</div>
                            <form className="flip-card__form" action="">
                                <input onChange={(e) => setName(e.target.value)} className="flip-card__input" placeholder="Name" type="text" />
                                <input onChange={(e) => setEmail(e.target.value)} className="flip-card__input" name="email" placeholder="Email" type="email" />
                                <input onChange={(e) => setPassword(e.target.value)} className="flip-card__input" name="password" placeholder="Password" type="password" />
                                <button onClick={registerUser} className="flip-card__btn">Confirmar</button>
                            </form>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    )
}
export default Login;
