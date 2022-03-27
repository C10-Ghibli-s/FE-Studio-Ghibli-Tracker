import React from "react";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const responseFacebook = (response) => {
    console.log("Login result",response);
}

function Facebook(){
    return(
        <div>
            <FacebookLogin
                /*this API_KEY should be in a .env file, but first we need to config environment variables in our webpack
                because the webpack that we are using is own configuration it's not default create-react-app*/
                appId="469241738264429"
                autoLoad
                callback={responseFacebook}
                render={renderProps => (
                <button onClick={renderProps.onClick}>Login with Facebook</button>
                )}
            />
        </div>
    );
}
export { Facebook }