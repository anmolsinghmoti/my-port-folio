import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import {Link} from 'react-scroll'
import Services from '../Services/Services'
import Experience from '../Experience/Experience'
import Portfolio from '../Portfolio/Portfolio'

const Navbar = () => {
  return (
    <div className='n-wrapper mb-4' id='Navbar'>
     <div className="n-left">
    <div className="n-name">
      <span className='span-1'>A</span> 
    <span>n</span>
    <span>m</span>
    <span>o</span>
    <span>l</span></div>
    <Toggle/>
</div>
<div className="n-right">
    <div className="n-list">
        <ul>
          <Link spy={true} to='Navbar' smooth={true}>
            <li>Home</li>
            </Link>
            <Link spy={true} to='Services' smooth={true}>
            <li>Services</li>
            </Link>

            <Link spy={true} to='Experience' smooth={true}>
            <li>Experience</li>
            </Link>

            <Link spy={true} to='Portfolio' smooth={true}>
            <li>Portfolio</li>
            </Link>
        </ul>
    </div>
    <button className="button n-button">Contact me</button>
</div> 
</div>
  )
}

export default Navbar