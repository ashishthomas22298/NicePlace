import React from "react";
import "./App.css";
import Header from "./Header.jsx";
import Jumbotron from "./Jumbotron.jsx";

function App(){
    return <div>
        <Header />
        <section id="Home" >
            <Jumbotron />
        </section>
        <section id="About"></section>
        <section id="Services"></section>
        <section id="Blog"></section>
        <section id="Search"></section>
    </div>;
}

export default App;