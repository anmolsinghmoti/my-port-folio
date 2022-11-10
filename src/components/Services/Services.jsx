import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import GlassesEmoji from '../../img/glasses.png'
import HumbleEmoji from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './Anmol_Resume_cen.pdf'
import { themeContext } from '../../ModeContext'
import { useContext } from 'react'
import {motion} from 'framer-motion'
const Services = () => {
    const transition={duration:2, type: 'spring'}
    const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="service" id='Services'>
        {/* left part */}
        <div className="s-left" >
            <span style={{color: darkMode? 'white' : ''}}>Fabulous</span>
            <span>Services</span>
            <span style={{color: darkMode? 'white' : ''}}>
                I am providing service in
                <br/>web development field as well as in
                <br/> 
                android application development 
            </span>
            <a href={Resume} download>
            <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur" style={{background:'#ABF1FF94'}}></div>
        </div>
        {/* right part */}
       
        <motion.div className="s-right heart"
        initial={{left:'28rem'}}
        whileInView={{left:'14rem'}}
        transition={transition}
        style={{left:'14rem'}} 
        
        >
            
            <div>
                <Card emoji={HeartEmoji}
                heading={'Web Developer'}
                details={"MEARN Stack, Java EE, Core MVC"}
                >

                </Card>
            </div>
        </motion.div>
        {/* 2nd card */}
        <motion.div className="s-right glass "
         initial={{left:'-16rem'}}
         whileInView={{left:'-4rem'}}
         transition={transition}
        style={{left:'-4rem', top:'14rem'}}
       
        >
            
            <div>
                <Card emoji={GlassesEmoji}
                heading={'Android App Developer'}
                details={"Java + Android Studio"}
                >

                </Card>
            </div>
        </motion.div>
    {/* 3rd card */}
        <motion.div className="s-right humble " 
        initial={{left:'28rem'}}
        whileInView={{left:'14rem'}}
        transition={transition}
        style={{left:'14rem', top:'19rem'}}>
            
            <div>
                <Card emoji={HumbleEmoji}
                heading={'Amazon Web Services'}
                details={"AWS using .NET Framework "}
                >

                </Card>
            </div>
        </motion.div>
        
        <div className='blur s-blur2'>
        
    </div>
    </div>
    
  )
}

export default Services