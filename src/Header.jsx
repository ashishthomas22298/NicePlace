import React from "react";
import "./Header.css";
import Logo from "./Logo.jsx";
import Menu from "./Menu.jsx";
import LoginButtons from "./LoginButtons.jsx";
function Header(){
    
    return <div id="Header">
        <Logo />
        <Menu list = {["About","Services","Blog","Search"]}/>
        <LoginButtons buttons ={[["Log in","#login"],["Sign Up","#signup","filled"]]}/>
    </div>;
}

export default Header;