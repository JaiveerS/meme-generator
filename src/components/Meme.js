import React from "react";
import memesData from "../memesData";


function Meme(){
    function HandleClick(){
        const size = memesData.data.memes.length;
        const index = Math.round(Math.random() *size)
        const data = memesData.data.memes
        return (
            console.log(data[index].url)
        )
    }

    return(
        <main>
            <div className="form">
                    <input className="form--input" type="text" placeholder="Top text"/>
                    <input className="form--input" type="text" placeholder="Bottom text" />
                    {/* add a onclick for the submit button */}
                    <button className="form--submit" onClick={HandleClick}>Get a new meme image 🖼</button> 
            </div>
        </main>
    )
}

export default Meme;