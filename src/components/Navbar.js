import React from "react";
import Troll from "../images/troll.png"

export default function Navbar(){
    return(
        <div className="nav">
            <img className="nav--icon" src={Troll} alt="troll" ></img>
            <h2 className="nav--title">Meme Generator</h2>
        </div>
    )
}