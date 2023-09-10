import React from 'react'
import './train.css'

const train = () => {
    return (
        <>
            <div className='train'>
                <div className='train_tital'>            
                    <h1>Truly Transformational Results</h1>
                    <h4>THIS IS HOW WE TRAIN</h4>
                </div>
                <div className='pet_videos'>
                    {/* <video className='' src='assets/video/pet.mp4' /> */}
                    <video width="200" height="400" controls autoplay >
                        <source src="../assets/video/pet.mp4" type="video/webm" />
                    </video>
                    <video width="200" height="400" controls autoplay >
                        <source src="../assets/video/pet2.mp4" type="video/webm" />
                    </video>
                    <video width="200" height="400" controls autoplay >
                        <source src="../assets/video/pet3.mp4" type="video/webm" />
                    </video>
                    <video width="200" height="400" controls autoplay >
                        <source src="../assets/video/pet4.mp4" type="video/webm" />
                    </video>

                </div>
            </div>
        </>
    )
}

export default train