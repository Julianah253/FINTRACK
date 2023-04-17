import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
        <footer>
        <div className="first">
            <div className="columnOne">
            <i className="fa-solid fa-bolt"></i>
            <span> Fintrack </span>
            </div>

            <div className="columnTwo">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugit hic laborum. </p>
            </div>

            <div className="columnThree">
               <i class="fa-brands fa-twitter"></i>
               <i class="fa-brands fa-facebook"></i>
               <i class="fa-brands fa-linkedin"></i>
               <i class="fa-brands fa-youtube"></i>
            </div>
        </div>
        <div className="second">
            <ul style={{listStyle: "none"}}>
                <li><h3> Links </h3></li>
                <li> Home </li>
                <li> Features </li>
                <li> About Us </li>
                <li> Contact Us </li>
            </ul>
        </div>
        <div className="third">
            <ul style={{listStyle: "none"}}>
                <li><h3> Support </h3></li>
                <li> FAQs </li>
                <li> Help Center </li>
                <li> Security </li>
                <li> Accessibility </li>
            </ul>
        </div>
        <div className="fourth">
            <ul style={{listStyle: "none"}}>
                <li><h3> Legal </h3></li>
                <li> Privacy Policy </li>
                <li> Terms and Conditions </li>
                <li> Security </li>
                <li> Accessibilty </li>
            </ul>
        </div>
        </footer>
    </div>
  )
}

export default Footer