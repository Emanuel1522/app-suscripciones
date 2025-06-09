import SubscriptionItem from "../components/SubscriptionItem";
import { useEffect, useState } from "react";
import "./SeeSubscription.css"
let apiItems = "https://api-suscripciones.onrender.com/items";

const SeeSubscription = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [filteredSubscriptions, setFilteredSubscriptions] = useState([]);
  const [subscriptionSearched, setSubscriptionSearched] = useState("")

  useEffect(() => {
    getItems();
  }, []);

  let idUser = JSON.parse(localStorage.getItem("idUser"));

  function getItems() {
    fetch(apiItems)
      .then((res) => res.json())
      .then((data) => {
        setSubscriptions(data);
        setFilteredSubscriptions(data.filter((subscription) => subscription.idUser === idUser));
      })
      .catch(err => console.error(err))
  }

  function handleSearch(e) {
    let value = e.target.value;
    setSubscriptionSearched(value);

    if (value.trim() === "") {
      const allUserSubscriptions = subscriptions.filter(
        (subscription) => subscription.idUser === idUser
      )
      setFilteredSubscriptions(allUserSubscriptions);
    } else {
      let filtered = subscriptions.filter(
        (subscription) =>
          subscription.idUser === idUser &&
          subscription.name.toLowerCase().includes(value.toLowerCase())
      )
      setFilteredSubscriptions(filtered)
    }
  }


  return (
    <>
      <form className="subscriptionForm">
        <input
          value={subscriptionSearched}
          onChange={handleSearch}
          className="askSubscription"
          placeholder="Nombre suscripcion" />
      </form>

      {filteredSubscriptions.length === 0 ? (
        <div className="subscriptionList">
          <p className="noSubscriptionsMessage">No hay suscripciones</p>
        </div>
      ) : (
        <ul className="subscriptionList">
          {filteredSubscriptions
            .map((item) => (
              <SubscriptionItem key={item.id} item={item} getItems={getItems} />
            ))}
        </ul>
      )}
    </>
  );
};


export default SeeSubscription;