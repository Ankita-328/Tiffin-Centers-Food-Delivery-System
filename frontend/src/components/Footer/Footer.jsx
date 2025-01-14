import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='logo' src={assets.logo} alt="" />
                <p>The main of this website is to connect customers with tiffin centres around them.Our mission is to deliver delicious home-made food at your doorstep.</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon}/>
                    <img src={assets.linkedin_icon}/>
                    <img src={assets.twitter_icon}/>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-1111111111</li>
                    <li>contact@foodcenter</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2025 @ FoodCenter - All Right Reserved.</p>
    </div>
  )
}

export default Footer