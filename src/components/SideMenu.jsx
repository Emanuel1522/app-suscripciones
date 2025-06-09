import image from '../assets/sideMenuImg.jpg'
import { redirectAlert } from '../helpers/functions';
import { Link, useNavigate } from 'react-router-dom';

const SideMenu = ({ isOpen, setIsOpen }) => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    function logOut() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        localStorage.removeItem("idUser")
        redirectAlert(navigate, "Cerrando sesión...", "/");
    }

    return (
        <div id="mainMenu" className={isOpen ? "open" : ""}>
            <aside className="mainMenu">
                <h1 className="menuTitle">¡Suscripciones digitales!</h1>
                <h2 className="menuUsername">Usuario: {user?.name}</h2>
                <img className="menuImage" src={image} alt="imagen menu" />
                <nav className="menuNavigate">
                    <Link to="/home/main" className="menuNav" onClick={() => setIsOpen(false)}>Inicio</Link>
                    <Link to="createSubscription" className="menuNav" onClick={() => setIsOpen(false)}>Registrar suscripción</Link>
                    <Link to="seeSubscription" className="menuNav" onClick={() => setIsOpen(false)}>Suscripciones</Link>
                    <button onClick={logOut} type="button" className="menuNav">Cerrar sesión</button>
                </nav>
            </aside>
        </div>
    )
}


export default SideMenu;