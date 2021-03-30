import React from "react";
import "./Jumbotron.css";

function Jumbotron(){
    return<div id="Jumbotron">
            <div className="Title">
                <h1>Space that</h1>
                <h1>inspire</h1>
            </div>

            <div className="options">
                <div className="location">
                    <h3>Location</h3>
                    <p>London</p>
                </div>
                <div className="activity">
                    <h3>Activity</h3>
                    <p>Relaxing</p>
                </div>
                <div className="date">
                    <h3>Date</h3>
                    <p>03-30-21</p>
                </div>
                <div className="search">Search</div>
            </div>
        </div>;
}

export default Jumbotron;