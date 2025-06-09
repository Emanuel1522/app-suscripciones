import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { generalAlert } from "../helpers/functions";
let apiItems = "https://api-suscripciones.onrender.com/items";

const EditSubscription = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");
    const [date, setDate] = useState("");
    let navigate = useNavigate();
    let { id } = useParams();

    useEffect(() => {
    fetch(`${apiItems}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setPrice(data.price);
        setType(data.type);
        setDate(data.date);
      });
  }, [id]);

    function editSubscription(e) {
        e.preventDefault();
        let idUser = JSON.parse(localStorage.getItem("idUser"));
        
        let subscriptionEdited = {
            idUser: idUser,
            name: name,
            price: price,
            type: type,
            date: date,
        }
        fetch(`${apiItems}/${id}`, {
            method:"PUT",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(subscriptionEdited),
        }).then(() => {
            generalAlert("Hecho!", "Suscripcion editada con exito", "success")
            navigate("/home/seeSubscription")
        })
    }


    return (
        <div className="susbcriptionForm">
            <div className="card">
                <div className="title">Editar Suscripción</div>
                <form className="form">
                    <input value={name} onChange={(e) => setName(e.target.value)} className="input" placeholder="Nombre del servicio" type="text" />
                    <input value={price} onChange={(e) => setPrice(e.target.value)} className="input" placeholder="Costo mensual" type="text" />
                    <input value={type} onChange={(e) => setType(e.target.value)} className="input" placeholder="Categoría" type="text" />
                    <input value={date} onChange={(e) => setDate(e.target.value)} className="input" placeholder="Fecha de renovación" type="text" />
                    <button onClick={editSubscription} className="button">Confirmar</button>
                </form>
            </div>
        </div>
    )
}

export default EditSubscription;