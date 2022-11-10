import React from 'react'
import './MoreWorks.css'
import HeartEmoji from '../../img/heartemoji.png'
import Card from '../Card/Card'
const MoreWorks = () => {
  return (
    <div className="moreworks">
        {/* 1st card */}
         <div className="s-right" style={{left:'0rem'}}>
            
            <div>
                <Card emoji={HeartEmoji}
                heading={'Centenario App'}
                details={"Android App using Android studio + Java"}
                >
                </Card>
                </div>
          </div>

           {/* 2nd card */}
         <div className="s-right" style={{left:'22vw'}}>
            
            <div>
                <Card emoji={HeartEmoji}
                heading={'Centenario App'}
                details={"Android App using Android studio + Java"}
                >
                </Card>
                </div>
          </div>
           {/* 3rd card */}
           <div className="lower-cards">
         <div className="s-right" style={{left:'44vw'}}>
            
            <div>
                <Card emoji={HeartEmoji}
                heading={'Centenario App'}
                details={"Android App using Android studio + Java"}
                >
                </Card>
                </div>
          </div>
           {/* 4th card */}
         <div className="s-right" style={{left:'66vw'}}>
            
            <div>
                <Card emoji={HeartEmoji}
                heading={'Centenario App'}
                details={"Android App using Android studio + Java"}
                >
                </Card>
                </div>
          </div>
          </div>

</div>

   
  )
}

export default MoreWorks