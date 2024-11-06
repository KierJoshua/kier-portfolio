import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import html from '../../components/images/html-md.png'
import css from '../../components/images/css.png'
import js from '../../components/images/javascript.png'
import bootstrap from '../../components/images/bootstrap.png'
import tailwind from '../../components/images/tailwind.png'
import react from '../../components/images/react.png'
import wordpress from '../../components/images/wordpress.png'
import SkillsIcons from "./SkillsIcons";

function SkillsCarousel() {

  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   speed:500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   initialSlide:0,
  //   // autoplay: true,
  //   // autoplaySpeed: 2000,
  //   // pauseOnHover: true,
  //    responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3, slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };
  // return (
  //   <div className="slider-container text-white" >
    


  //       <Slider {...settings}>
  //        <SkillsIcons icon = {html}/>
  //       <SkillsIcons icon = {css}/> 
  //       <SkillsIcons icon = {bootstrap}/> 
  //       <SkillsIcons icon = {tailwind}/> 
  //       <SkillsIcons icon = {js}/> 
  //       <SkillsIcons icon = {react}/> 
  //       <SkillsIcons icon = {wordpress}/> 
  //       </Slider>
  //     </div>

  // );

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default SkillsCarousel;
