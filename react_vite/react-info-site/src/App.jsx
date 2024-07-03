import React from "react"
import './index.css'
import Header from "./components/Navbar"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"

export default function App () {
  return (
  <div className="container">
      <Header />
      <MainContent />
      <Footer />
  </div>
  );
}




