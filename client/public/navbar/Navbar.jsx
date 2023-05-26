import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div class="navbar-container">
        <div class="navbar-left">
            <h1 class="navbar-title">WELCOME TO (NAME) TODOLIST APP</h1>
        </div>
        <div class="navbar-right">
            <div class="navbar-items">
                <a href="#benefit">Benefit</a>
                <a href="#app">App</a>
                <a href="#ourTeam">Our Team</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
