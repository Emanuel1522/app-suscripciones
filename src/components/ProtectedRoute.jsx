import { Navigate } from "react-router-dom";

function ProtectedRoute({ component }) {
  let token = localStorage.getItem("token");
  if (token) {
    return component;
  } else {
    return <Navigate to="/" />;
  }
}

export default ProtectedRoute;
