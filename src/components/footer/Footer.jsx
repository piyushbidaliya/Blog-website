import React from "react";
import './footer.css';

const Footer = () =>{
    return(
<div className="footer">
  <div className="container">
    <div className="row">
      <div className="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="/about">about us</a></li>
          <li><a href="/services">our services</a></li>
          <li><a href="/blog">blog</a></li>
          <li><a href="#pr">privacy policy</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>get help</h4>
        <ul>
          <li><a href="#FA">FAQ</a></li>
          <li><a href="/contact">contact us</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>follow us</h4>
        <div className="social-links">
          <a href="#fa"><i className="fab fa-facebook-f"></i></a>
          <a href="#tw"><i className="fab fa-twitter"></i></a>
          <a href="#in"><i className="fab fa-instagram"></i></a>
          <a href="#wh"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </div>
  </div>
  </div> 
    )
}

export default Footer;