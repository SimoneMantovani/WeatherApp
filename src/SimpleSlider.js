import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SunnyPNG from './image/sunnyPNG.png';
import CloudJPEG from './image/cloudJPEG.jpg';
import RainPNG from './image/rainPNG.png';
import FogPNG from './image/fogPNG.png';

export default function SimpleSlider({city}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  function renderWeatherImage(condition){
    switch(condition){
      case 'Rain': return RainPNG;
      case 'Clouds': return CloudJPEG;
      case 'Clear': return SunnyPNG;
      case 'Mist': return CloudJPEG;
      case 'Fog': return FogPNG;
      default : return '';
    }
  }
  return (
    <Slider {...settings} className="Slide">
            <div >
                <h1>{city.name}</h1>
                <span className="MainItalianCity">
                    <img src={renderWeatherImage(city.weather[0].main)} style={{
                    height: '30%',
                    width: '30%'
                    }} alt="error" />
                    <h2>{city.weather[0].description}</h2>
                </span>
            </div>
            <div>
                <h1>{city.name}</h1>
                <span className="MainItalianCity">
                    <h2>Umidità: {city.main.humidity}</h2>
                </span>
            </div>
            <div>
                <h1>{city.name}</h1>
                <span className="MainItalianCity">
                  <h2>Temperatura: {(city.main.temp - 273.15).toFixed(2)}</h2>
                </span>
            </div>
    </Slider>
  );
}