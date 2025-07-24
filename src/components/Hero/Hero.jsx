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
            src="https://static.vecteezy.com/system/resources/previews/005/412/355/non_2x/big-sale-up-to-30-percent-off-all-sale-styles-in-stores-and-online-special-offer-sale-30-percent-number-tag-voucher-illustration-free-vector.jpg"
            alt="Slide 1"
            className="rounded-xl w-full h-[50vh] sm:h-[60vh] object-cover"
          />
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            src="https://online.visual-paradigm.com/repository/images/29b1787c-2691-43ca-a613-20c67a042f28/twitter-posts-design/brown-new-arrivals-for-coming-summer-twitter-post.png"
            alt="Slide 2"
            className="rounded-xl w-full h-[50vh] sm:h-[60vh] object-cover"
          />
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img
            src="https://media.telanganatoday.com/wp-content/uploads/2025/04/OPPO-K13-Overpowered-smartphone-redefines-the-Rs-20000-segment-launching-on-April-21.jpg"
            alt="Slide 3"
            className="rounded-xl w-full h-[50vh] sm:h-[60vh] object-cover"
          />
        </div>

        {/* Slide 4 */}
        <div className="relative">
          <img
            src="https://www.jacamo.co.uk/i/5fc505ccd50bfa8b/original/JA_TB_300124_Home_Essentials_MP_Main_3d1fd26fe5.jpg"
            alt="Slide 4"
            className="rounded-xl w-full h-[50vh] sm:h-[60vh] object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
