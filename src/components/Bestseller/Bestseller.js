import React from 'react';
import { bestsellerContent } from '../../data/content';
import Slider from 'react-slick';
import './Bestseller.css';

const Bestseller = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 images per slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bestseller" id="bestseller">
      <h1>{bestsellerContent.title}</h1>
      <Slider {...settings}>
        {bestsellerContent.products.map((product) => (
          <div key={product.id} className="product-item">
            <div className="product-content">
              <div className="product-image">
                <img src={`assets/${product.image}`} alt={product.name} />
              </div>
              <p className="product-name">{product.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Bestseller;
