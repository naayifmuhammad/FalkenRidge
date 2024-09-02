import React from 'react';
import data from '../data/data.json';
import './ProductDesign.css';

const ProductDesign = () => {
  return (
    <section id="product-design">
      <h2>Product Design</h2>
      <p>{data.productDesign.description}</p>
      <div className="design-types">
        <h3>Our Product Design Services:</h3>
        <ul>
          <li>Logo Design</li>
          <li>UI/UX Design</li>
          <li>Packaging Design</li>
          <li>Brand Identity</li>
          <li>Marketing Materials</li>
          <li>Product Prototyping</li>
        </ul>
      </div>
    </section>
  );
};

export default ProductDesign;
