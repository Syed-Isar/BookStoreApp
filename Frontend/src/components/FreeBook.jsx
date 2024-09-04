import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "../list.json"
import Cards from './Cards';
function FreeBook() {
  const filterData = list.filter((data) => data.category === "Free");
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
    ]
  };
  
  return (
    <>
      <div className=' max-w-screen-2xl container mx-auto md:px-15 px-4 my-10'>
        <div>
        <h1 className='font-semibold text-xl pb-2'>Free Offered Course</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perspiciatis qui necessitatibus animi numquam!</p>

        </div>

      <div>
      <Slider {...settings}>

        {/* mapping filterdata to item in order to use in cards as a prop plaese refer to cards component */}
        {filterData.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))}
      
      </Slider>
      </div>
      </div>
    </>
  )
}

export default FreeBook