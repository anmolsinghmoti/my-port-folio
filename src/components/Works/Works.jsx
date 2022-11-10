import React from 'react'
import './Works.css'
import HeartEmoji from '../../img/heartemoji.png'
import Card from '../Card/Card'
const Works = () => {
  return (
    <div className="works">
           <div className="s-left">
            <span>My Projects</span>
            <span>Worked for various projects</span>
            <span>
                I have worked on various projects
                <br/>individually as well as in team
                <br/> 
                awesome experience working as a team.
            </span>
      
            <button className="button s-button">Hire me</button>
           
            <div className="blur s-blur" style={{background:'#ABF1FF94'}}></div>
        </div>

          {/* right part */}
          <div className="s-right" style={{left:'10rem'}}>
            
            <div>
                <Card emoji={HeartEmoji}
                heading={'Centenario App'}
                details={"Android App using Android studio + Java"}
                >

                </Card>
            </div>
        </div>
    </div>
  )
}

export default Works