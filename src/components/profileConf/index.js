import React from "react";
import ReactDOM from "react-dom";

function ProfileConf({children}) {
    return ReactDOM.createPortal(
        <div className="modalBackground">{children}</div>,
        document.getElementById('profileConf')
    )
}

export { ProfileConf };