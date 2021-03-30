import React from "react";

function Menu(props){

    const listItems = props.list.map((item) =>
        <li key={item}><a href= { "#" + item }>{item}</a></li>
    );
    
    return <ul>
        <ul>{listItems}</ul>
    </ul>;
}

export default Menu;