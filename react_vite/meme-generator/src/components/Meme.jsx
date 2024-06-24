import React, { useState, useEffect } from "react"

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    console.log(allMemes);

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;

        setMeme(prevMeme => {
            return {
                ...prevMeme, 
                randomImage: url
            }
        });
    }

    console.log(meme);

    function handleChange(event) {
        
        const { value, name } = event.target;
        setMeme(prevText => {
            return {
                ...prevText, 
                [name]:value
            }
        })
    }


    return(
            <main>
                <div className="form">
                    <input 
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                        name="topText"
                        onChange={handleChange}
                    />
                    <input 
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                        name="bottomText"
                        onChange={handleChange}
                    />
                    <button 
                        className="form--button"
                        onClick={getMemeImage}
                    >
                        Get a new meme image 🖼
                    </button>
                </div>
                <div className="meme">
                    <img src={meme.randomImage} className="meme--image" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </main>
    )
}