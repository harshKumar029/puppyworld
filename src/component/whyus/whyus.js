import React from 'react'
import './why_us.css';

const whyus = () => {
  return (
    <>
    <div className='whyus_tital'>
        <h1>Why Choose Us?</h1>
    </div>
    <div className='whyus_content'>
        <div className='bullet_content'>
            <ul>
                <li>Trusted & Caring Trainers</li>
                <li>Service at Your Door-Step</li>
                <li>Guaranteed Satisfaction</li>
                <li>Local Onground Support</li>
            </ul>
        </div>
        <div className='img_pet'>
            <img className='pet_img' src='./assets/img/golden.avif' alt='pet' />
        </div>
    </div>

    </>
  )
}

export default whyus