import React from "react";
import memesData from "../memesData";


function Meme(){
    const [content, setContent] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.round(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setContent( prevState => ({
                ...prevState,
                randomImage: url
            }))
    }

    return(
        <main>
            <div className="form">
                    <input className="form--input" type="text" placeholder="Top text"/>
                    <input className="form--input" type="text" placeholder="Bottom text" />
                    <button className="form--submit" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <h2>{content.topText}</h2>
            <h2>{content.bottomText}</h2>
            <img src={content.randomImage} className="form--image" alt=""></img>
        </main>
    )
}

export default Meme;