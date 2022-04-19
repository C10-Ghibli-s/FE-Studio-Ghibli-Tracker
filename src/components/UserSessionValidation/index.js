import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";


const UserSessionValidation = () => {
  const { login, userSession } = useContext(UserContext)
  
  return (
    <>{!userSession.access_token && <Navigate to="/login" replace={true} />}</>
  );
};

export { UserSessionValidation };

