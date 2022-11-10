import React from 'react'
import { easeQuadInOut } from 'd3-ease';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import AnimatedProgressProvider from "./AnimatedProgressProvider"
import "./ProgressCircle.css"
const ProgressCircle = (props) => {
  return (
    <div >
<AnimatedProgressProvider
  valueStart={0}
  valueEnd={props.per}
  duration={1.4}
 
  easingFunction={easeQuadInOut}
>
  {(value) => {
    const roundedValue = Math.round(value);
    return (
      <CircularProgressbar 
        value={value}
        text={`${roundedValue}%`}
        
        /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation.  #f0d8ff */
        styles={buildStyles({ pathTransition: 'none',trailColor: "#cef6ff", pathColor: 'rgba(254,215,154,255)'})}
      />
    );
  }}
</AnimatedProgressProvider>
</div>
  )
}

export default ProgressCircle