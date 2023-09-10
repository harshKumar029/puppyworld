import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/navigation bar/navbar';
import Hero from './component/hero/hero';
import Whyus from './component/whyus/whyus'
import Petfamily from './component/petfamily/petfamily'
import Service from './component/service/service'
import Contactus from './component/contactus/contactus'
import Footer from './component/footer/footer';
import About from './component/about/about'
import Product from './component/product/product';
import Traininghero from './component/Training/Training_hero/traininghero'
import Train from './component/Training/we_train/train'
import Petcare from './component/Training/pet_care/petcare'
import Faq from './component/Training/faq/faq'
import Card from './component/Training/price-card/card'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<>  
          <Hero />
          <Whyus />
          <Petfamily />
          <Service />
          {/* <Contactus /> */}
          </>

        } />
        <Route path="about" element={<About/>}></Route>
        <Route path="product" element={<Product/>}></Route>
        <Route path="training" element={<>
          <Traininghero/>
          
          <Card/>
          <Petcare/>
          <Faq/>
        
        </>}></Route>
      </Routes>
      <Train/>
      <Contactus />
      <Footer />

    </BrowserRouter>
    
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
