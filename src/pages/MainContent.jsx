import { useNavigate } from "react-router-dom";

const MainContent = () => {

    const navigate = useNavigate();
    const createSubscription = () => {
        navigate("/home/createSubscription");
    };
    
    return (
        <div className="mainApp">
            <h1>¡Tu pagina para crear y modificar suscripciones!</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quam nulla necessitatibus perspiciatis inventore sapiente dolor soluta
                suscipit nam dolorem, obcaecati porro, mollitia, ab doloribus placeat expedita ad hic cupiditate.</p>
            <button onClick={createSubscription} className="start">Comenzar</button>
        </div>
    )
}
export default MainContent;