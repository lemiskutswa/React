import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
    

    function getMemeImage() {
        const memeArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memeArray.length);
        const url = memeArray[randomNumber].url;
        console.log(url);
    }
    
    return(

        <main>
            <div className="form">
                <div className="meme-div">
                    <label className="form--label">Top text</label>
                    <input type="text" className="form--input" placeholder="Shut Up"/>
                </div>

                <div className="meme-div">
                    <label className="form--label">Bottom text</label>
                    <input type="text" className="form--input" placeholder="And Take My Money"/>
                </div>
            
                <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼</button>
            </div>
        </main>
    )
}