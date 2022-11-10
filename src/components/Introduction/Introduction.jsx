import React from 'react'
import './Introduction.css'
import {motion} from 'framer-motion'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from'../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Dp from '../../img/Dp5.png'
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Glassessimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../ModeContext'
import { useContext } from 'react'

const Introduction = () => {
    const transition={duration:2, type: 'spring'}
    const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? 'white' : ''}}>Hi there! I Am</span>
                <span style={{color: darkMode? 'white' : ''}}>Anmol Singh</span>
                <span style={{color: darkMode? 'white' : ''}}>Web developer with experience in C#, JAVA, Python, HTML, CSS, REACT.
                     Working with various IDEs such as Visual Studio, Visual Code,
                      Android Studio, Eclipse, Netbeans to provide quality work.
                </span>
            </div>
            <button className="i-button button">Hire me</button>
            <div className="i-icons">
                <a href="https://github.com/anmolsinghmoti"><img src={Github} alt="" /></a>
                <a href="https://www.linkedin.com/in/anmolsinghmoti"><img src={LinkedIn} alt="" /></a>
                <a href=""><img src={Instagram} alt="" /></a>
                
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={Dp} alt="" />
            
            <motion.img
            initial={{left:'-36%'}}
            whileInView={{left:'-24%'}}
            transition={transition}
            src={Glassessimoji} alt="" />
            <motion.div className='floating-div'
            initial={{top:'8%', left:'72%'}}
            whileInView={{left:'58%'}}
            transition={transition}
            style={{top:'8%',left:'58%'}}
            >
                <FloatingDiv image={Crown} text1='Web' text2='Developer'/>
             </motion.div>
            <motion.div className='floating-div' style={{top:'18rem',left:'0rem'}}
            initial={{left:'-12%'}}
            whileInView={{left:'0%'}}
            transition={transition}
            >
                <FloatingDiv image={Thumbup} text1='Android' text2='Developer'></FloatingDiv>
            </motion.div>
            
            <div className='blur' style={{background:'#edd0ff'}}>
              
                {/* Purple Blur effect div */}
            </div>
            <div className="blur"  
            style={{background:'#C1f5ff',
            top:'17rem',
            width:'21rem',
            height:'11rem',
            left:'-9rem'
        
        
        }}></div>

        </div>
    </div>
  )
}

export default Introduction