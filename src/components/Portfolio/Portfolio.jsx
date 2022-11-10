import React from 'react'
import './Portfolio.css'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import{Swiper, SwiperSlide} from 'swiper/react'
import {Pagination,Autoplay, Navigation} from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'
import 'swiper/css/autoplay'
import { themeContext } from '../../ModeContext'
import { useContext } from 'react'



const Portfolio = () => {
    const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
    const projects=[{
        img: Sidebar,
        about:"Centenario App project developed using Android Studio+ Java",
        link:'https://github.com/anmolsinghmoti/AuthenticatedPortfolio.git'
    },
    {
        img: Ecommerce,
        about:"Centenario App project developed using Android Studio+ Java"
    },
    {
        img: HOC,
        about:"Centenario App project developed using Android Studio+ Java"
    },
    {
        img: <MusicApp></MusicApp>,
        about:"Centenario App project developed using Android Studio+ Java"
    },
    ]
  return (
    <div className="p-wrapper" id='Portfolio'>
       
            <span >I have worked on various projects</span>
            <span>individually as well as in team<br/>
            
                awesome experience working as a team.
            </span>
           
            <div className="blur s-blur" style={{background:'#ABF1FF94'}}></div>
       
        <div className="p-heading">
            
            <div className="blur p-blur1" style={{background:'var(--purple'}}></div>
            <div className="blur p-blur2" style={{background:'skyblue'}}></div>
            {/* slider */}
            </div>

            <Swiper
            modules={[Pagination, Autoplay,Navigation]}
            slidesPerView={1}
            navigation={true}
            pagination={{clickable:true}}
            loop={true}
            className='p-wrapper'
            autoplay={{
                delay: 3000,
                // pauseOnMouseEnter: true,
                
                
              }}
            >
                {projects.map((projects, index)=>{
                    return(
                    <SwiperSlide key={index}>
                        <div className="portfolio">
                        <img src={projects.img} alt=''></img>
                        <span style={{color: darkMode? 'white' : ''}}>{projects.about}</span>
                       <a href={projects.link}> <button className="button s-button">GitHub</button></a>
                        </div>
                    </SwiperSlide>
                    )
                })}
            </Swiper>

        
    </div>

  )
}

export default Portfolio