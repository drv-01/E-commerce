import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    image: 'src/assets/p-1.jpg',
    name: 'Harry Chokker',
    role: 'VOLLEYBALL PLAYER',
    quote:
      'Absolutely amazing service! Fast delivery and the quality is top-notch. I recommend Bazzarify to everyone.',
  },
  {
    image: 'src/assets/p-2.jpg',
    name: 'Alper Kamu',
    role: 'DESIGNER',
    quote:
      'Their collection is superb. The products feel premium and I’ve had no issues with returns or payments.',
  },
  {
    image: 'src/assets/p-3.jpg',
    name: 'Holden Caulfield',
    role: 'UI DEVELOPER',
    quote:
      'Really happy with the customer support and delivery speed. The packaging was eco-friendly too! and I’ve had no issues with returns or payments.',
  },
  {
    image: 'src/assets/p-4.jpg',
    name: 'DUBA DUBA',
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
