import React from "react";
import TuitList from "../tuits/tuits-list.js";
import "./index.css";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <div className="container">
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitList/>
        </div>
    );
}
export default HomeComponent;