import React from 'react'
import './hero.css'

const hero = () => {
  return (
    <>
    <div className='wrapper'>
     <video autoPlay loop muted plays-inline className='hero_video' >
        <source src='./assets/video/petvideo.mp4'/>
      </video>
      </div>
      <div className='hero-content'>
        <h1>Hire the best <span>professional trainer</span> for your <br/> dog in new delhi</h1>
        <h5>Creating well-behaved dogs through expert training and positive reinforcement</h5>
        <h4>Explore more</h4>
      </div>
    </>
  )
}

export default hero