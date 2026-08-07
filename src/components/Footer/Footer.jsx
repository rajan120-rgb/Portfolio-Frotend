import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className="footer">
        <p>© 2025 Rajan. All Rights Reserved.</p>
        <div className="footer-links">
            <li ><a  href="https://www.facebook.com" target='_target' rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a></li>
            <li><a  href="https://www.instagram.com" target='_target' rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://www.youtube.com" target='_target' rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a></li>
            <li><a href="https://twitter.com" target='_target' rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
        </div>
    </div>
    </>
  )
}

export default Footer
