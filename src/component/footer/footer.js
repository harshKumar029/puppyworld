import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMail} from "react-icons/hi";
import { FaFacebookF ,FaInstagramSquare ,FaYoutube} from "react-icons/fa";
import './footer.css'

const footer = () => {
    return (
        <>
        <div className='footer'>
            <div className='footer_content'>
                <div>
                    <div>
                        <img className='footer-logo' src="./assets/img/logo.png" alt='icon'/>
                        {/* <h2>Puppy World</h2> */}
                    </div>
                    <p>Our mission at Puppy World is to make the life of you <br/>
                     and your pets easier and even more enjoyable.</p>
                </div>
                <div>
                    <h3>Service</h3>
                    <ul className='abc'>
                        <li>Dog Boarding</li>
                        <li>Dog Training</li>
                        <li>Dog Exercise/Walking</li>
                        <li>Pet Grooming</li>
                    </ul>
                </div>
                <div>
                <h3>Serving In</h3>
                    <ul>
                        <li>Dwarka Nawada</li>
                        <li>Uttam Nagar</li>
                        <li>Janakpuri</li>
                        <li>Vikaspuri</li>
                        <li>Tilak Nagar</li>
                        <li>Palam Vihar</li>
                        <li>Rajori Garden</li>
                        <li>DLF Phase Palam</li>
                    </ul>
                </div>
                <div>
                <h3>Need Help</h3>
                    <ul>
                        <li><FaPhone className='icon FaPhone'/> 9319881018</li>
                        <li><HiOutlineMail className='icon HiOutlineMail'/> deepakpetboardingntraining@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className='footer_friend'>
                <h4>Let’s be friends!</h4>
                <div>
                   <FaFacebookF className='icon' />
                   <FaInstagramSquare className='icon'/>
                   <FaYoutube className='icon' />
                </div>
            </div>
            <div className='coppyright'>
                <p>© 2023 Puppy World • All Rights Reserved</p>
            </div>
            </div>
        </>
    )
}

export default footer