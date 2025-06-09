import image from '../assets/sideMenuImg.jpg'
import { redirectAlert } from '../helpers/functions';
import { Link, useNavigate } from 'react-router-dom';

const SideMenu = () => {
    let navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem("user"));

    function logOut() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        localStorage.removeItem("idUser")
        redirectAlert(navigate, "Cerrando sesión...", "/");
    }

    return (
        <aside id='mainMenu'>
            <h1 className='menuTitle'>¡Suscipciones digitales!</h1>
            <h2 className='menuUsername'>Usuario: {user.name}</h2>
            <img className='menuImage' src={image} alt="imagen menu" />
            <nav className='menuNavigate'>
                <Link to="/home/main" className='menuNav'>Inicio</Link>
                <Link to="createSubscription" className='menuNav'>Registrar suscripcion</Link>
                <Link to="seeSubscription" className='menuNav'>Suscripciones</Link>
                <button
                    onClick={logOut}
                    type="button"
                    className="menuNav"
                >Cerrar sesion</button>
            </nav>
        </aside>
    )
}


export default SideMenu;