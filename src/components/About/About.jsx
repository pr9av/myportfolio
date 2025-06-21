import React from 'react'
import './About.css' 
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_pofile.svg'


const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt=''/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an Proficient developer  with </p>
                    <p>My passion for this </p>
                </div>
                <div className="about-skills"></div>
            </div>
        </div>
        </div>
  )
}

export default About
