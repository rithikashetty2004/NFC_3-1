import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      <div>
        <div className="slide-content">
          <img src="/images/image1.jpg" alt="Slide 1" />
        </div>
      </div>
      <div>
        <div className="slide-content">
          <img src="/images/image2.jpg" alt="Slide 2" />
        </div>
      </div>
      <div>
        <div className="slide-content">
          <img src="/images/image3.jpg" alt="Slide 3" />
        </div>
      </div>
    </Slider>
  );
};

export default ImageSlider;
