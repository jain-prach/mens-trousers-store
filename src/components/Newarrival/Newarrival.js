import React from 'react';
import { newArrivalsContent } from '../../data/content';
import Slider from 'react-slick';
import './Newarrival.css';

const Newarrival = () => {
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
    <section className="newarrival">
      <h1>{newArrivalsContent.title}</h1>
      <Slider {...settings}>
        {newArrivalsContent.products.map((product) => (
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

export default Newarrival;
