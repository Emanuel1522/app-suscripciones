let apiItems = "https://api-suscripciones.onrender.com/items";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "../helpers/functions";


const SubscriptionItem = ({ item, getItems }) => {
  let navigate = useNavigate();

  function deleteSubscription(id) {
    confirmAlert(id, apiItems, getItems)
  }

  function editSubscription() {
    navigate(`/home/editSubscription/${item.id}`);
  }

  return (
    <div className="subscriptionItem">
      <div className="subInfo">
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>{item.type}</p>
        <p>{item.date}</p>
      </div>
      <div className="subActions">
        <button onClick={editSubscription}>✏️</button>
        <button onClick={() => deleteSubscription(item.id)} >❌</button>
      </div>
    </div>
  );
};

export default SubscriptionItem;