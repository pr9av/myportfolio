import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img
        src={profile_img}
        alt="profile_img"
        style={{ width: "170px", height: "auto" }}
      />
      <h1><span>I'm Pranav Kumar</span>  ,Backend developer</h1>
      <p>I am a developer currently in the final year of my Bachelors in technology</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'></AnchorLink>Connect With Me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
