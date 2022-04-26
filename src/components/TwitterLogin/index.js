import axios from "axios";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import "./Twitter.scss";

function Twitter() {
  const handleTwitterLogin = () => {
    console.log('Here should be the fetch function')
  };
  return (
    <div>
      <button className="twitter-button" onClick={handleTwitterLogin}>
        <FaTwitter className="twitter-icon" />
        <a 
          style={{ textDecoration: "inherit", color: 'inherit'} }
          target={"_blank"}
          href="https://studio-ghibli-c10-platzimaster.herokuapp.com/auth/login/twitter">
          Connect with Twitter
        </a>
      </button>
    </div>
  );
}
export { Twitter };
