import React, { useState } from "react"
import memesData from "../memesData.js"

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });

    const [allMemeImages, setAllMemeImages] = useState(memesData);

    
    
    //const [memeImage, setMemeImage] = useState('http://i.imgflip.com/1bij.jpg');

    function getMemeImage() {
        const memeArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memeArray.length);
        const url = memeArray[randomNumber].url;

        setMeme(prevMeme => {
            return {
                ...prevMeme, 
                randomImage: url
            }
        });
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
                <img src={meme.randomImage} className="meme--image" />
            </main>
    )
}