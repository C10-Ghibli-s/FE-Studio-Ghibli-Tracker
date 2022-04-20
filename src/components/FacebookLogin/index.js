import axios from "axios";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import "./Facebook.scss";

function Facebook() {
  const handleFacebookLogin = () => {
    console.log('Here should be the fetch function')
  };
  return (
    <div>
      <button className="facebook-button" onClick={handleFacebookLogin}>
        <FaFacebook className="facebook-icon" />
        <a 
          style={{ textDecoration: "inherit", color: 'inherit'} }
          target={"_blank"}
          href="https://studio-ghibli-c10-platzimaster.herokuapp.com/auth/login/facebook">
          Connect with Facebook
        </a>
      </button>
    </div>
  );
}
export { Facebook };
