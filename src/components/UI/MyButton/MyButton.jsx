import React from "react";
import cl from "./MyButton.module.css";

function MyButton(props) {
    return <button {...props} className={cl.myButton}>{props.children}</button>;
}

export default MyButton;
