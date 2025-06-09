import "./CreateSubscription.css"
import { generalAlert } from "../helpers/functions.js"
import { useState } from "react";
let apiItem = "https://api-suscripciones.onrender.com/items";

const CreateSubscription = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [type, setType] = useState("")
  const [date, setDate] = useState("")

  function registerSubscription(e) {
    e.preventDefault();
    let idUser = JSON.parse(localStorage.getItem("idUser"));

    let item = {
      idUser: idUser,
      name: name,
      price: price,
      type: type,
      date: date,
    };
    fetch(apiItem, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    }).then(() => {
      generalAlert("Registro exitoso", "Puede visualizarlo en Suscripciones ", "success")
    });
  }

  return (
    <div className="susbcriptionForm">
      <div className="card">
        <div className="title">Registrar Suscripción</div>
        <form className="form">
          <input onChange={(e) => setName(e.target.value)} className="input" placeholder="Nombre del servicio" type="text" />
          <input onChange={(e) => setPrice(e.target.value)} className="input" placeholder="Costo mensual" type="text" />
          <input onChange={(e) => setType(e.target.value)} className="input" placeholder="Categoría" type="text" />
          <input onChange={(e) => setDate(e.target.value)} className="input" placeholder="Fecha de renovación" type="text" />
          <button onClick={registerSubscription} className="button">Confirmar</button>
        </form>
      </div>
    </div>
  )
}
export default CreateSubscription;