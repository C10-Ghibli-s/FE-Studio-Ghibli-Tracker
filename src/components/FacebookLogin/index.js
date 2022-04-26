import axios from "axios";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import "./Facebook.scss";

function Facebook() {
  const FACEBOOK_LOGIN =
    "https://studio-ghibli-c10-platzimaster.herokuapp.com/auth/login/facebook";
  const handleFacebookLogin = () => {
    console.log("Here should be the fetch function");
    axios
      .get(FACEBOOK_LOGIN, {
        headers: {
          "Content-Type": 'text/html',
          'Access-Control-Allow-Origin': 'localhost:3001',
          'Access-Control-Allow-Credentials': 'true'

        },
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <button className="facebook-button" onClick={handleFacebookLogin}>
        <FaFacebook className="facebook-icon" />
        Connect with Facebook
      </button>
    </div>
  );
}
export { Facebook };
