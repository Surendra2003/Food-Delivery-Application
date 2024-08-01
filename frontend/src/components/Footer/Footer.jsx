import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Similique consequatur libero ex repudiandae assumenda 
                    voluptatibus nesciunt suscipit distinctio dolorem sed voluptate animi,
                     quas ipsam vitae, accusantium possimus non ut delectus.</p>

                      <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                      </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>privacy Policy</li> 
                </ul>
            </div>
            <div className="footer-content-right">

                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>1234567890</li>
                    <li>contact@tomato.com</li>
                </ul>

            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 @  tomato .com -All rights are reserved.  
        </p>

    </div>

  )
}

export default Footer
