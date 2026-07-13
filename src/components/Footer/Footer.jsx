import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
//   const openFacebook = () => {
//   window.open(
//     "https://www.facebook.com/yourusername",
//     "_blank",
//     "width=800,height=600"
//   );
// };

// const openInstagram = () => {
//   window.open(
//     "https://www.instagram.com/yourusername",
//     "_blank",
//     "width=800,height=600"
//   );
// };

// const openYoutube = () => {
//   window.open(
//     "https://www.youtube.com/@yourchannel",
//     "_blank",
//     "width=800,height=600"
//   );
// };

// const openTikTok = () => {
//   window.open(
//     "https://www.tiktok.com/@yourusername",
//     "_blank",
//     "width=800,height=600"
//   );
// };
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
