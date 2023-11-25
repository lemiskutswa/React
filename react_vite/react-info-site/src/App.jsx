import React from "react"
import ReactDOM from "react-dom/client"
import './index.css'
import Header from "./Header"



function MainContent () {
  return (
      <div>
      <h1 className="h1">Fun Facts about React</h1>
      <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      </div>

  )
}

function Footer () {
  return (
    <div>
    <footer className="footer">2023 Lemis Development. All rights reserved</footer>;
</div>
  )
}

function App () {
  return (
  <div>
      <Header />
      <MainContent />
      <Footer />
  </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)


