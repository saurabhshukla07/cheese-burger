import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className='footer-content-left'>
                <img className='footer-logo' src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, iste. Velit aut distinctio odit accusamus, officiis placeat dolore tenetur voluptatibus voluptatem doloribus excepturi reprehenderit, at labore animi laudantium, omnis nisi.</p>
                <div className="footer-social-icons">
                   <img src={assets.facebook_icon} alt="" />
                   <img src={assets.twitter_icon} alt="" />
                  <a href="https://www.linkedin.com/in/saurabhshukla07/" target='_blank'>  <img src={assets.linkedin_icon} alt="" /> </a>
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9876543210</li>
                    <li>sidshukla8416@gmail.com</li>
                </ul>
            </div>
        </div>
      <hr />
      <p className="footer-copyright">
        Made with ❤️ in India, Copyright 2024 © Saurabh Shukla - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
