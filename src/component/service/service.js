import React from 'react'
import './service.css';

const service = () => {
  return (
    <>
    <div className='service_tital'>
        <h1>Our service</h1>
        <h4>Discover Our Premium Services</h4>
    </div >
    <div className='service_content'>
       <div>
        <img className='' src='assets/img/Dog boarding.avif' alt='img'/>
        <h5>Dog boarding</h5>
       </div>
       <div>
        <img className='' src='assets/img/Dog Training.avif' alt='img'/>
        <h5>Dog Training</h5>
       </div>
       <div>
        <img className='' src='assets/img/Dog Exercise Walking.avif' alt='img'/>
        <h5>Daily Dog Exercise/ <br/> Walking</h5>
       </div>
       <div>
        <img className='' src='assets/img/Pet Grooming.avif' alt='img'/>
        <h5>Pet Grooming</h5>
       </div>
    </div>
    <div className='service_more'>
    <button className='more_service' >View More</button>
    </div>
    </>
  )
}

export default service