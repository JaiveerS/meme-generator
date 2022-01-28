import React from "react";
import memesData from "../memesData";


function Meme(){
    let url

    function getMemeImage(){
        const data = memesData.data.memes
        const size = data.length;
        const randomNumber = Math.round(Math.random() *size)
        url = data[randomNumber].url
        console.log(url)
    }

    return(
        <main>
            <div className="form">
                    <input className="form--input" type="text" placeholder="Top text"/>
                    <input className="form--input" type="text" placeholder="Bottom text" />
                    {/* add a onclick for the submit button */}
                    <button className="form--submit" onClick={getMemeImage}>Get a new meme image 🖼</button>
                    <p>{url}</p>
            </div>
        </main>
    )
}

export default Meme;