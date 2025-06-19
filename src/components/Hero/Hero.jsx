import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
const Hero = () => {
  return (
    <div classname ='hero'>
    <img src={profile_img} alt="profile_img" style={{ width: '100px', height: 'auto' }}/>
    <h1>I'm  Pranav Kumar</h1>
    <p>I am a developer </p>
    <div className="hero-action">
    <div classname='hero-connect'></div>
    <div className="hero-resume">My resume</div>  
    </div>
    </div>
  )
}

export default Hero