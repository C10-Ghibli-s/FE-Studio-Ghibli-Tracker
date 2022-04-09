import React from "react";
import errorImage from './images/errorImage.png';
import "./errorPage.scss";

function ErrorSearch({errorMessage, errorOption}) {
    return(
        <React.Fragment>
            <div className="errorContainer">
                <picture className="errorImageContainer">
                    <img src={errorImage}></img>
                </picture>
                <div className="errorMessageContainer">
                    <h1> Woops! </h1>
                    <p className="errorMessage"> {errorMessage} <span data-testid="errorFeedBack">{errorOption}</span></p>
                </div>
            </div>
        </React.Fragment>

    );
}

export { ErrorSearch };
