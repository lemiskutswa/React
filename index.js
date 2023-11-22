import React from "react"

import ReactDOM from "react-dom"

// ReactDOM.render(<h1 className="header">My name is Lemis</h1>, document.getElementById("root"));//ReactDOM is a global variable made available by (ReactDom link in HTML)
// //ReactDom library gives us access to the render method

// const page = 
// <ul>
//     <li>Home</li>
//     <li>Blog</li>
//     <li>Contact</li>
// </ul>; 

// ReactDOM.render( 
// page, document.getElementById("list")
// );

// console.log(page);

//React Component
//JSX is mostly about putting HTML elements in variables

const navbar = (
    <nav>
        <h1>Lemis Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"));
