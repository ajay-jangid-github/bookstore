//import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./cards";

import list from  '../list.json'
//import { useEffect,useState } from 'react';

function Freebokks() {

  var settings = {  
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const filterData  = list.filter((data) => data.category === "Free");
 
 
  return (
  <>
  <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div>
    <h1 className= "font-bold">Free Courses</h1>
    <p>
    Discover a world of knowledge with our selection of Free Book Courses. Whether you are looking to dive into programming, enhance your business acumen, or explore creative arts, our curated collection offers something for everyone. 
    </p>
 
  </div>
  <div>
  <Slider {...settings}>
       {filterData.map((item)=>(
       <Cards item = {item}  key ={item.id} />
       ))}
      </Slider>
  </div>
  </div>
  </>
  )
}

export default Freebokks