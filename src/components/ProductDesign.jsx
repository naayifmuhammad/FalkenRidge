import React from 'react';
import data from '../data/data.json';
import './ProductDesign.css';

const ProductDesign = () => {
  const { description, services } = data.productDesign;

  return (
    <section id="product-design">
      <h2>Product Design</h2>
      <p>{description}</p>
      <div className="design-types">
        <h3>Our Product Design Services:</h3>
        <ul className="service-list">
          {services.map((service, index) => (
            <li key={index} className="service-item">
              <h4>{service.type}</h4>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductDesign;
