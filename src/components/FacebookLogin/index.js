import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FaFacebook } from "react-icons/fa";
import "./Facebook.scss";

const responseFacebook = (response) => {
  console.log("Login result", response);
};

function Facebook() {
  return (
    <div>
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_API_KEY}
        autoLoad={true}
        callback={responseFacebook}
        render={(renderProps) => (
          <button className="facebook-button" onClick={renderProps.onClick}>
            <FaFacebook />
            <span>Register with Facebook</span>
          </button>
        )}
      />
    </div>
  );
}
export { Facebook };
