import { useContext } from "react";
import { UserNameContex } from "../context/UserNameContex";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({children}) => {
  const { userName } = useContext(UserNameContex);
  const location = useLocation();

  if (userName) return <>{children}</>;
  else
    return (
      <Navigate to="/" state={{
        from: location.pathname +
          location.search
      }} />
  ); 
};

export default ProtectedRoute;