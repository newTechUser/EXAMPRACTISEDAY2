import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navstart">
          <img src="https://preview.colorlib.com/theme/aroma/img/logo.png.webp" alt="" className="navlogo" />
      </div>
      <div className="navcenter">
          <p className="home">
            <Link className="home" to="/">Home</Link>
          </p>
          <p className="add">
            <Link className="add" to="/Add">Add</Link>
          </p>
          <p className="blog">
            Blog
          </p>
          <p className="pages">
            Pages
          </p>
          <p className="contact">
            Contact
          </p>
      </div>
      <div className="navend">
        <div className="navicon">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <div className="divnavbtn">
          <button className="navbtn">Buy Now!</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar