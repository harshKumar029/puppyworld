import React from 'react'
import './pet_family.css'

const petfamily = () => {
    return (
        <>
            <div className='pet_family_c'>
                <div className='img_family'>
                  <img className='family_img' src='assets/img/love_pet.png' alt='pet' />
                </div>
                <div className='family_content'>
                    <h1>Your pet,our family</h1>
                    <p>1000+ monthly happy pet parents <br /> on our platform!</p>
                    <h5>Hurry Up, Limited slots left!</h5>
                </div>
            </div>
        </>
    )
}

export default petfamily