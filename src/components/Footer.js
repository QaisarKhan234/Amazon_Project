import React, { useEffect, useState } from "react";
import "./Footer.css";
const Footer = () => {
  const [showButton, setShowButton] =  useState(false);
  useEffect(()=>{
    const handleScroll = () => {
      if(window.pageYOffset > 300){
        setShowButton(true)
      }else{
        setShowButton(false)
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scrolling animation
    });
  };
  return (
    <div className="footer">
      <div className="foot_panel1">
        <p onClick={scrollToTop} style={{cursor:"pointer"}}>Back to top</p>
      </div>
      <div className="foot_panel2">
        <ul className="footer_ul">
          <p>Get to Know Us</p>
          <a>Careers</a>
          <a>Blog</a>
          <a>About Amazon</a>
          <a>Investor Relations</a>
          <a>Amazon Devices</a>
          <a>Amazon Science</a>
        </ul>
        <ul className="footer_ul">
          <p>Get to Know Us</p>
          <a>Careers</a>
          <a>Blog</a>
          <a>About Amazon</a>
          <a>Investor Relations</a>
          <a>Amazon Devices</a>
          <a>Amazon Science</a>
        </ul>
        <ul className="footer_ul">
          <p>Get to Know Us</p>
          <a>Careers</a>
          <a>Blog</a>
          <a>About Amazon</a>
          <a>Investor Relations</a>
          <a>Amazon Devices</a>
          <a>Amazon Science</a>
        </ul>
        <ul className="footer_ul">
          <p>Get to Know Us</p>
          <a>Careers</a>
          <a>Blog</a>
          <a>About Amazon</a>
          <a>Investor Relations</a>
          <a>Amazon Devices</a>
          <a>Amazon Science</a>
        </ul>
      </div>
      <div className="foot_panel3">
        <div className="logo"></div>
      </div>
      <div className="foot_panel4">
        <div className="pages">
          <a>Conditions of use</a>
          <a>Privacy Notice</a>
          <a>Your ads Privacy Choices</a>
        </div>
        <div className="copyright"></div>
      </div>
    </div>
  );
};

export default Footer;
