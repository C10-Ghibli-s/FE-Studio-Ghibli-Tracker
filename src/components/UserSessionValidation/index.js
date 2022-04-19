import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";


const UserSessionValidation = () => {
  // const { login, userSession } = useContext(UserContext)
  
  return (
    <>{!window.localStorage.getItem("userSession") && <Navigate to="/" replace={true} />}</>
  );
};

export { UserSessionValidation };

