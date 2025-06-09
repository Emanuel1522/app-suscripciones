let apiItems = "https://api-suscripciones.onrender.com/items";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "../helpers/functions";


const SubscriptionItem = ({ item, getItems}) => {
  let navigate = useNavigate();

  function deleteSubscription(id) {
    confirmAlert(id, apiItems, getItems)
  }

  function editSubscription() {
    navigate(`/home/editSubscription/${item.id}`);
  }
  
  return (
    <li className="subscriptionItem">
      <p className="subInf">{item.name}</p>
      <p className="subInf">{item.price}</p>
      <p className="subInf">{item.type}</p>
      <p className="subInf">{item.date}</p>
      <button onClick={editSubscription}>✏️</button>
      <button onClick={() => deleteSubscription(item.id)} >❌</button>
    </li>
  );
};

export default SubscriptionItem;