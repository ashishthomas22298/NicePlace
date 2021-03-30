import React from "react";
import "./LoginButtons.css";

function LoginButtons(props){

    const buttons = props.buttons.map((button) =>
    <a 
    className= {"btn" + (button[2]? " " + button[2]:"") } 
    key={button[0]} 
    href={ button[1] }>
        { button[0] }
    </a>
    );
    return <div id="LoginButtons">{ buttons }</div> ;   
}

export default LoginButtons;