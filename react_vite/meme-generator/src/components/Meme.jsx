import React, { useState } from "react"
import memesData from "../memesData.js"

export default function Meme() {
    
    
    const [memeImage, setMemeImage] = useState('');

    function getMemeImage() {
        const memeArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memeArray.length);
        const url = memeArray[randomNumber].url;

        setMemeImage(url);
    }

      
    
    return(
            <main>
                <div className="form">
                    <input 
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                    />
                    <input 
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                    />
                    <button 
                        className="form--button"
                        onClick={getMemeImage}
                    >
                        Get a new meme image 🖼
                    </button>
                </div>
                <img src={memeImage} className="meme--image" />
            </main>
    )
}