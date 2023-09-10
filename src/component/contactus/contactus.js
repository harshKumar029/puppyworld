import React from 'react'
import './contactus.css';
// import { FaLocationDot } from 'react-icons';
// import { FaLocationDot} from 'react-icons';
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMail, HiLocationMarker } from "react-icons/hi";

const contactus = () => {
  return (
    <>
      <div id='contact'>
        <div className='contact_tital'>
          <h1>Get In Touch</h1>
          <h4>Looking forward to connect with you</h4>
        </div >
        <div className='contact_content' >
          <div className='map_' >
            <iframe className='contact_map' title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8139769209265!2d77.08117017522585!3d28.63533688395381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0495b8bfa1c5%3A0x5163ca164e9b3b7f!2sStreet%20Number%2014%2C%20New%20Mahavir%20Nagar%2C%20Tilak%20Nagar%2C%20Delhi%2C%20110018!5e0!3m2!1sen!2sin!4v1693995989604!5m2!1sen!2sin"
            ></iframe>
          </div>
          <div className='contact_data' >
            <div>
              <h5><FaPhone className='icon FaPhone' /> 9319881018</h5>
            </div>
            <div>
              <h5><HiOutlineMail className='icon HiOutlineMail' /> deepakpetboardingntraining@gmail.com</h5>
            </div>
            <div>
              <h5><HiLocationMarker className='icon HiLocationMarker' /> Dwarka sector 19 Gola diary plot no. 29 11071</h5>
            </div>
            <div>
              <h4>Opening Hour</h4>
              <h6>Sun 8Am--8Pm <span className='span_p'>|</span> Sat 8Am--8Pm</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default contactus