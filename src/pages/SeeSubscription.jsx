import SubscriptionItem from "../components/SubscriptionItem";
import { useEffect, useState } from "react";
import "./SeeSubscription.css"
let apiItems = "https://api-suscripciones.onrender.com/items";

const SeeSubscription = () => {
  const [suscripciones, setSuscripciones] = useState([]);


  function getItems() {
    fetch(apiItems)
      .then(res => res.json())
      .then(data => setSuscripciones(data))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getItems();
  }, []);

  let idUser = JSON.parse(localStorage.getItem("idUser"));

  return (
    <>
      <form className="subscriptionForm">
        <input
          className="askSubscription"
          placeholder="Nombre suscripcion" />
        <button className="searchSubscription" type="submit">Buscar</button>
      </form>

      {suscripciones.filter((item) => item.idUser === idUser).length === 0 ? (
        <div className="subscriptionList">
          <p className="noSubscriptionsMessage">No hay suscripciones</p>
        </div>
      ) : (
        <ul className="subscriptionList">
          {suscripciones
            .filter((item) => item.idUser === idUser)
            .map((item) => (
              <SubscriptionItem key={item.id} item={item} getItems={getItems} />
            ))}
        </ul>
      )}
    </>
  );
};


export default SeeSubscription;