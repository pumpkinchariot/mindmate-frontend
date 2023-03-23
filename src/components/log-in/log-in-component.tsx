import React from "react";
import "./log-in-component.css";
interface LogInComponentProps {
    setLoggedIn: (isLogIn: boolean) => void;
}
const LogInComponent = (props: LogInComponentProps) => {

    const handleLogInButton = () => {

    }

    return(
        <>
            <div style={{position: "fixed", zIndex: "2", color: "blue", height: "0rem", top: "0", right: "3rem"}}>
                <button className="log-in-button" onClick={() => props.setLoggedIn(true)}>
                    Log in
                </button>
            </div>
        </>
    );
}

export default LogInComponent;