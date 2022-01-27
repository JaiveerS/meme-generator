import React from "react";


function Meme(){
    return(
        <main>
            <form className="form">
                    <input className="form--input" type="text" placeholder="Top text"/>
                    <input className="form--input" type="text" placeholder="Bottom text" />
                    {/* add a onclick for the submit button */}
                    <input className="form--submit" type="submit" value="Get a new meme image 🖼"/> 
            </form>
        </main>
    )
}

export default Meme;