import React from 'react';

const Gallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-4 py-16 mx-auto flex flex-col">
        {/* Heading */}
        <div className="w-full mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">Top Products</h1>
          <p className="leading-relaxed text-base text-gray-600">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. 
            Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="flex flex-wrap -m-1 md:-m-2">
          {/* Left Column */}
          <div className="flex flex-wrap w-full md:w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <img alt="Top Product 1" className="w-full h-full object-cover object-center border-2 rounded" src="src/assets/TopProduct1.jpg" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img alt="Top Product 2" className="w-full h-full object-cover object-center border-2 rounded" src="src/assets/TopProduct2.jpg" />
            </div>
            <div className="w-full p-1 md:p-2">
              <img alt="Top Product 5" className="w-full h-full object-cover object-center border-2 rounded" src="src/assets/TopProduct5.jpg" />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-wrap w-full md:w-1/2">
            <div className="w-full p-1 md:p-2">
              <img alt="Top Product 3" className="w-full h-full object-cover object-center border-2 rounded" src="src/assets/TopProduct3.jpg" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img alt="Top Product 4" className="w-full h-full object-cover object-center border-2 rounded" src="src/assets/TopProduct4.jpg" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img alt="Top Product 6" className="w-full h-full object-cover object-center border-2 rounded" src="src/assets/TopProduct6.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
