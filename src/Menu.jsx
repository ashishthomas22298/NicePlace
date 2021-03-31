import React from "react";
import "./Menu.css"
function Menu(props){

    const listItems = props.list.map((item) =>
        <li key={item}><a href= { "#" + item }>{item}</a></li>
    );
    
    return <ul>
        <ul className="Menu">{listItems}</ul>
    </ul>;
}

export default Menu;