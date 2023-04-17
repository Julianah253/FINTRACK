import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav>
          <div class="left">
          <i class="fa-solid fa-bolt"></i>
          <span> Fintrack </span>
          </div>

          <div class="right">
            <ul>
              <li> About Us </li>
              <li> Contact Us </li>
              <li> Products </li>
            </ul>
            <button>
            <i class="fa-solid fa-download"></i>
            <span> Download App </span>
            </button>
          </div>
        </nav>
    </div>
  )
}

export default Navbar