import React from "react";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {FaFacebook} from 'react-icons/fa';
import './Facebook.scss';

const responseFacebook = (response) => {
    console.log("Login result",response);
}

function Facebook(){
    return(
        <div>
            <FacebookLogin
                /*this API_KEY should be in a .env file, but first we need to config environment variables in our webpack
                because the webpack that we are using is own configuration it's not default create-react-app*/
                appId={process.env.REACT_APP_FACEBOOK_API_KEY}
                autoLoad
                callback={responseFacebook}
                render={renderProps => (
                <button className="facebook-button" onClick={renderProps.onClick}>
                    <FaFacebook />
                    <span>Register with Facebook</span>
                </button>
                )}
            />
        </div>
    );
}
export { Facebook }