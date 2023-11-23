import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(<h1 className="header">My name is Lemis</h1>, document.getElementById("root"));//ReactDOM is a global variable made available by (ReactDom link in HTML)
// //ReactDom library gives us access to the render method

//const { divide } = require("lodash");

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

// const navbar = (
//     <nav>
//         <h1>Lemis Website</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

//ReactDOM.render(navbar, document.getElementById("root"));
 
// ReactDOM.createRoot(document.getElementById("root")).render(navbar);

const page = (
    <div>
        <img src="react-logo.png" width="40px"/>
        <h1>Fun Facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
);

//ReactDOM.createRoot(document.getElementById("root")).render(page);
ReactDOM.render(page, document.getElementById("root"));

console.log(page);