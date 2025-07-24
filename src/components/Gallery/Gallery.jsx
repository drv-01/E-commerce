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
              <img alt="Top Product 1" className="w-full h-full object-cover object-center border-2 rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyFyEeuHs7XBtN63DNiu8WiJNV_vAGY0rKQHoBS8EPjUI4Lvio7cIifyeDF1HI_iIrWcg&usqp=CAU" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img alt="Top Product 2" className="w-full h-full object-cover object-center border-2 rounded" src="https://images-eu.ssl-images-amazon.com/images/I/81KFpzE130L._AC_UL600_SR600,600_.jpg" />
            </div>
            <div className="w-full p-1 md:p-2">
              <img alt="Top Product 5" className="w-full h-full object-cover object-center border-2 rounded" src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-large_2x.jpg" />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-wrap w-full md:w-1/2">
            <div className="w-full p-1 md:p-2">
              <img alt="Top Product 3" className="w-full h-full object-cover object-center border-2 rounded" src="https://p2-ofp.static.pub/fes/cms/2023/02/22/bnonn13nlo262tl4jepf88lzslw82w058021.png" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img alt="Top Product 4" className="w-full h-full object-cover object-center border-2 rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMYmNSV8x5e0LaHwx83lOnWcThwbHpAJimdmvaBl-p5N8teYA5bWswYlNoiMexTTerfF0&usqp=CAU" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img alt="Top Product 6" className="w-full h-full object-cover object-center border-2 rounded" src="https://images.vestiairecollective.com/images/resized/w=1024,h=1024,q=75,f=auto,/produit/55072630-2_2.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
