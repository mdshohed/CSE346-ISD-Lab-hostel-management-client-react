import React from 'react';
import banner1 from '../../assets/Banner/banner1.jpg'
import banner2 from '../../assets/Banner/food.jpg'
import banner3 from '../../assets/Banner/banner3.jpg'
import banner4 from '../../assets/Banner/banner5.jpg'

const Banner = () => {
  return (
     <div>
       <div class="carousel max-h-md">
        <div id="slide1" class="carousel-item relative w-full">
          <div class="hero " style={{
            background: `url(${banner1})`,
            backgroundSize: 'cover',
            height: '400px'
          }}>
            {/* <div class="hero-overlay"></div> */}
            <div class="hero-content text-center text-neutral-content">
              <div class="max-w-md">
                <h1 class="mb-3 text-4xl font-bold text-primary">Best Room Services</h1>
                <p class="mb-5 text-natural">To know more about our hostel management</p>
                <button class="btn text-neutral-content mr-3 btn-sm" >Learn More</button>
                <button class="btn btn-success btn-sm">Register</button>
              </div>
            </div>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="btn btn-circle btn-sm ">❮</a> 
            <a href="#slide2" class="btn btn-circle btn-sm">❯</a>
          </div>
        </div> 
        <div id="slide2" class="carousel-item relative w-full">
          <div class="hero" style={{
              background: `url(${banner2})`,
              backgroundSize: 'cover'
            }}>
            
            <div class="hero-content text-center text-neutral-content">
              <div class="max-w-md">
                <h1 class="mb-3 text-4xl font-bold text-primary">Best Food Services</h1>
                <p class="mb-5 text-accent">To know more about our hostel management</p>
                <button class="btn  text-neutral-content mr-3 btn-sm" >Learn More</button>
                <button class="btn  btn-success btn-sm">Register</button>
              </div>
            </div>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="btn btn-circle btn-sm">❮</a> 
            <a href="#slide3" class="btn btn-circle btn-sm">❯</a>
          </div>
        </div> 
        <div id="slide3" class="carousel-item relative w-full">
          <div class="hero" style={{
              background: `url(${banner3})`,
              backgroundSize: 'cover'
            }}>
            
            <div class="hero-content text-center text-neutral-content">
              <div class="max-w-md">
                <h1 class="mb-3 text-4xl font-bold text-primary">Student Review</h1>
                <p class="mb-5 text-accent">To know more about our hostel Review</p>
                <button class="btn text-neutral-content mr-3 btn-sm" >Learn More</button>
              </div>
            </div>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn btn-circle btn-sm">❮</a> 
            <a href="#slide4" class="btn btn-circle btn-sm">❯</a>
          </div>
        </div> 
        <div id="slide4" class="carousel-item relative w-full">
          <div class="hero" style={{
              background: `url(${banner4})`,
              backgroundSize: 'cover'
            }}>
            
            <div class="hero-content text-center text-neutral-content">
              <div class="max-w-md">
                <h1 class="mb-3 text-4xl font-bold text-primary">Best hostel services</h1>
                <p class="mb-5 text-accent">To know more about our hostel management</p>
                <button class="btn text-neutral-content mr-3 btn-sm" >Learn More</button>
                <button class="btn btn-success btn-sm">Register</button>
              </div>
            </div>
          </div>
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="btn btn-circle btn-sm">❮</a> 
            <a href="#slide1" class="btn btn-circle btn-sm">❯</a>
          </div>
        </div>
      </div>
     </div>
    
  );
};

export default Banner;