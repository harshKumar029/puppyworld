import React from 'react';
import './about.css';

const About = () => {
  return (
    <>
      <div className='about'>
        <h1>Deepak</h1>
        <div className='about_content' >
          <img className='deepak_img' src='./assets/img/logo.png' alt='img' />
          <div>
            <p>Since 2000, we’ve been proudly supporting pet parents throughout the New <br /> Delhi area. Motivated by a passion for animals and deep understanding of quality pet care,<br /> we continue to serve a growing client base and expand our service offerings to <br /> meet their needs. When you and your furry friend come to Pet Home Boarding,<br /> you become part of our family.
              Pet Home Boarding is owned and operated by<br /> Asha & Arun, a happily married couple, who have the perfect partnership <br />in life, in love, and in business. They joined forces in 2005, and they each bring<br /> their own unique set of skills and abilities to the ongoing pursuit of their<br /> mutual dream: to give clients and their pets the world’s best dog boarding experience.<br /></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About