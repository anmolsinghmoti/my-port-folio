import React from 'react'
import './Footer.css'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Fb from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png'
const Footer = () => {
  return (
   <div className="footer">
    <img src={Wave} alt='' style={{width:'100%'}}/>
    <div className="f-content">
        <span>anmolsinghmoti@gmail.com</span>
        <div className="f-icon">
        <Insta color='white' size='3rem'/>
        <Fb color='white' size='3rem'/>
        <Github color='white' size='3rem'/>
        </div>
    </div>
   </div>
  )
}

export default Footer