import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel CSS
import { Carousel } from 'react-responsive-carousel';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import './card.css'; // Your existing CSS file for styling

const card = () => {
    return (
      <div className='pricing-container'>
        <div className='pricing-tital'><h1>Our Dog Training Packages</h1></div>
        <Carousel
          showThumbs={false}
          showStatus={false} // Hide status indicator
          showArrows={true} // Show custom navigation arrows
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button className='custom-arrow custom-arrow-left' onClick={onClickHandler}><FaAngleLeft/></button>
              
            )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button className='custom-arrow custom-arrow-right' onClick={onClickHandler}><FaAngleRight/></button>
            )
          }
          centerMode={true}
          centerSlidePercentage={33.3} // Display 3 cards at a time
        >
          <div className='price-card'>
            <div><img className='card-img' src='assets/img/cardpng/puppytraining.png'alt=''/></div>
            <div className='price-content'> 
             <h3>PUPPY TRAINING</h3>
             <h5>12 Sessions | 1 Month</h5>
             <p>Start right with expert PUPPY <br/> TRAINING.</p>
            <h4>₹8,000</h4>
            </div>
          </div>
  
          <div className='price-card'>
          <div><img className='card-img' src='assets/img/cardpng/basictraining.png'alt=''/></div>
          <div className='price-content'> 
          <h3>BASIC TRAINING</h3>
             <h5>24 Sessions | 2 Months</h5>
             <p>Foundation skills with <br/> comprehensive BASIC TRAINING</p>
             <h4>₹15,800</h4>
          </div>
          </div>
  
          <div className='price-card'>
          <div><img className='card-img' src='assets/img/cardpng/inter.png'alt=''/></div>
          <div className='price-content'> 
             <h3>INTERMEDIATE TRAINING</h3>
             <h5>36 Sessions | 3 Months</h5>
             <p>Skills growth through our <br/> TRAINING programs.</p>
             <h4>₹21,800</h4>
          </div>
          </div>
         <div className='price-card'>
         <div><img className='card-img' src='assets/img/cardpng/smarttraining.png'alt=''/> </div>
         <div className='price-content'> 
             <h3>SMART TRAINING</h3>
             <h5>48 Sessions | 4 Months</h5>
             <p>Effective learning with <br/> SMART training methods.</p>
             <h4>₹28,800</h4>
         </div>
         </div>
         <div className='price-card'>
         <div><img className='card-img' src='assets/img/cardpng/puppy bath.png'alt=''/></div>
         <div className='price-content'> 
             <h3>BATH & BRUSH</h3>
             <h5>1 Bath</h5>
             <p>Grooming services for pets, brush, and bath</p>
             <h4>₹1,500</h4>
         </div>
         </div>

  
          {/* Add more pricing cards here */}
        </Carousel>
      </div>
    );
  };
  
// const card = () => {
//   return (
//     <>
//     <div className='price-card' >
//         <div>
//             <h3>PUPPY TRAINING</h3>
//             <img className='' src='assets/img/cardpng/puppytraining.png'alt=''/>
//             <h5>12 Sessions | 1 Month</h5>
//             <p>Start right with expert PUPPY <br/> TRAINING.</p>
//             <button>8,000</button>
//         </div>
//         <div>
//             <h3>BASIC TRAINING</h3>
//             <img className='' src='assets/img/cardpng/basictraining.png'alt=''/>
//             <h5>24 Sessions | 2 Months</h5>
//             <p>Foundation skills with comprehensive BASIC TRAINING</p>
//             <button>15,800</button>
//         </div>
//         <div>
//             <h3>INTERMEDIATE TRAINING</h3>
//             <img className='' src='assets/img/cardpng/inter.png'alt=''/>
//             <h5>36 Sessions | 3 Months</h5>
//             <p>Skills growth through INTERMEDIATE TRAINING programs.</p>
//             <button>21,800</button>
//         </div>
//         <div>
//             <h3>SMART TRAINING</h3>
//             <img className='' src='assets/img/cardpng/smarttraining.png'alt=''/>
//             <h5>48 Sessions | 4 Months</h5>
//             <p>Effective learning with SMART training methods.</p>
//             <button>28,800</button>
//         </div>
//         <div>
//             <h3>BATH & BRUSH</h3>
//             <img className='' src='assets/img/cardpng/puppy bath.png'alt=''/>
//             <h5>1 Bath</h5>
//             <p>Grooming services for pets, brush, and bath</p>
//             <button>1,500</button>
//         </div>
        
//     </div>
//     </>
//   )
// }

export default card