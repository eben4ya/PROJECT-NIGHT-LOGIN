import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="navbar-left">
            <h1 className="navbar-title">WELCOME TO TODOLIST APP</h1>
        </div>
        <div className="navbar-right">
            <div className="navbar-items">
                <a href="#benefit">Benefit</a>
                <a href="#app">App</a>
                <a href="#ourTeam">Our Team</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
