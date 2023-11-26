import React from "react"
import ReactDOM from "react-dom/client"
import './index.css'
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

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


