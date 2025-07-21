import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto mt-4 px-4">
      <Slider {...settings}>
        {/* Slide 1 with overlay text */}
        <div className="relative">
          <img
            src="src/assets/Home.jpg"
            alt="Slide 1"
            className="rounded-xl w-full h-[50vh] sm:h-[60vh] object-cover"
          />
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            src="src/assets/Fashion.jpg"
            alt="Slide 2"
            className="rounded-xl w-full h-[50vh] sm:h-[60vh] object-cover"
          />
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img
            src="src/assets/Electronics.jpg"
            alt="Slide 3"
            className="rounded-xl w-full h-[50vh] sm:h-[60vh] object-cover"
          />
        </div>

        {/* Slide 4 */}
        <div className="relative">
          <img
            src="src/assets/Essentials.jpg"
            alt="Slide 4"
            className="rounded-xl w-full h-[50vh] sm:h-[60vh] object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
