import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import {useRef} from 'react'
import { useState } from 'react';
import { themeContext } from '../../ModeContext'
import { useContext } from 'react'
import {motion} from 'framer-motion'
const Contact = () => {
    const transition={duration:2, type: 'spring'}
    const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
    const form = useRef();
    const [done, setDone]=useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_y1yk9ha', 'template_az5u438', form.current, 'llzl7ej-1yfHiCOzs')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className="contact-form">
        <motion.div className="c-left"
        initial={{left:'-10rem'}}
        whileInView={{left:'0rem'}}
        transition={transition}
        >
           
                <span style={{color: darkMode? 'white' : ''}}>Get in touch</span>
                <span>Contact me</span>
                <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>
            
        </motion.div>
        <motion.div className="c-right"
        initial={{right:'-10rem'}}
        whileInView={{right:'0rem'}}
        transition={transition}
        >
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' required/>
                <input type='email' name='user_email' className='user' placeholder='Email' required/>
                <textarea name='message' className='user' placeholder='Message' required/>
                <input type='submit' value='Send' className='button'/>
                <span style={{color: darkMode? 'white' : ''}}>{done && "Thanks for contacting me!"}</span>
                <div className='blur c-blur1' style={{background:'var(--purple)'}}></div>
            </form>
        </motion.div>
    </div>
  )
}

export default Contact