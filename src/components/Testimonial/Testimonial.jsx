import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQF5k_7vTEEbiw/profile-displayphoto-scale_400_400/B4EZfj4RF.HsAk-/0/1751874869200?e=1756339200&v=beta&t=4zx3LFgHqr5sxxoQF97JQgg8LTG6MxgrUehtNfd7VOc',
    name: 'Lakshay Yadav',
    role: 'VOLLEYBALL PLAYER',
    quote:
      'Absolutely amazing service! Fast delivery and the quality is top-notch. I recommend Bazzarify to everyone.',
  },
  {
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQFhy-D8R7Y7fw/profile-displayphoto-shrink_400_400/B4EZdkGIC_HYAs-/0/1749731022872?e=1756339200&v=beta&t=RgGQpLTLnw4bW5Fs7L6tcVxwboISJl3RwTi0W4v5vMM',
    name: 'Mayank',
    role: 'DESIGNER',
    quote:
      'Their collection is superb. The products feel premium and I’ve had no issues with returns or payments.',
  },
  {
    image: 'https://media.licdn.com/dms/image/v2/D5603AQGmy7wEqTBUVA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722570440825?e=1756339200&v=beta&t=lFGaxLlFxvXyr7FamvHfJHApT_PGw1dmL9foFtbBewE',
    name: 'Arun',
    role: 'UI DEVELOPER',
    quote:
      'Really happy with the customer support and delivery speed. The packaging was eco-friendly too! and I’ve had no issues with returns or payments.',
  },
  {
    image: 'https://media.licdn.com/dms/image/v2/D5603AQGIbZ8oaC5YjQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723926607159?e=1756339200&v=beta&t=M65kQ8kCUwaftz3L3EqmrHRSfp1uHHMnvlJEW4O4eLA',
    name: 'Drv',
    role: 'ENTREPRENEUR',
    quote:
      'Bazzarify stands out with secure payments and fast returns. I’m a repeat customer now and I’ve had no issues with returns or payments.',
  },
];

const Testimonial = () => {
  return (
    <div className="px-4 py-20 bg-white">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
        What Our Customers Say
      </h2>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-gray-100 rounded-xl p-6 mx-2 h-[100%] flex flex-col shadow-md hover:shadow-xl transition duration-300">
              <p className="text-gray-700 italic mb-6">&ldquo;{item.quote}&rdquo;</p>

              <div className="flex items-center mt-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border border-gray-300"
                />
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
