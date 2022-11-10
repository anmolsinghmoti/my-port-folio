import React from 'react'
import ProgressCircle from '../AnimatedProgressProvider/ProgressCircle'
import './Experience.css'
import { themeContext } from '../../ModeContext'
import { useContext } from 'react'
const Experience = () => {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div id='Experience'>
         <div className="experience" >
            <ProgressCircle per='90'></ProgressCircle>
            <h3 style={{color: darkMode? 'white' : ''}}>C#.NET</h3>
            </div>
            <div className="experience" >
            <ProgressCircle per='95'></ProgressCircle>
            <h3 style={{color: darkMode? 'white' : ''}}>Python</h3>
            </div>
        <div className="experience">
            <ProgressCircle per='85'></ProgressCircle>
            <h3 style={{color: darkMode? 'white' : ''}}>Java</h3>
            
        </div>
        <div className="experience">
            <ProgressCircle per='88'></ProgressCircle>
            <h3 style={{color: darkMode? 'white' : ''}}>AWS</h3>
            
        </div>
        </div>
    
  )
}

export default Experience