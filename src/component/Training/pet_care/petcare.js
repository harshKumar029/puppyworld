import React from 'react'
import './petcare.css'

const petcare = () => {
    return (
        <>
            <div className='petcare'>
                <div>
                    <h2>Let see how we care of your<br /> pets</h2>
                    <p>we know that your pets are more than just <br /> animals, they are members of your family. That's why we<br /> are committed to providing the best possible care for<br /> furry friends.</p>
                    <button>Book a Seassion</button>
                </div>
                <div>
                    <img className='' src='assets/img/cute pet.avif' alt='' />
                </div>
            </div>
        </>
    )
}

export default petcare