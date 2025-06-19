import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <img src={logo} alt="" style={{ width: '130px', height: 'auto' }} />
        <ul className='nav-menu'>
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>

        </ul>
        <div className="nav-connect">Connect with me</div>


    </div>
  )
}

export default Navbar