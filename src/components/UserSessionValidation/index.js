import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";

const UserSessionValidation = () => {
  const tokenCredentials = window.localStorage.getItem("token_credentials");

  return <>{!tokenCredentials && <Navigate to="/" replace={true} />}</>;
};

export { UserSessionValidation };
