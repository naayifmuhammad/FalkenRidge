import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data.json';
import { FaServer, FaBuilding } from 'react-icons/fa';
import './OurProducts.css';

const iconMap = {
  FaServer: <FaServer />,
  FaBuilding: <FaBuilding />
};

const OurProducts = () => {
  const products = data.products;

  useEffect(() => {
    window.ScrollReveal().reveal('.odd', {
      duration: 1500,        
      distance: '40px',      
      origin: 'left',       
      reset: true,
    });
    window.ScrollReveal().reveal('.even', {
      duration: 1500,        
      distance: '40px',      
      origin: 'right',       
      reset: true,
    });
  }, []);

  return (
    <section id="products">
      <div className="products-heading-container">
        <h1 className='heading-gradient'>Our Products</h1>
      </div>
      <div className="products-container">
        {products.map((product, index) => (
          <div key={product.name} className={`product-card ${index % 2 === 0 ? 'even' : 'odd'}`}>
            {iconMap[product.icon]} {/* Dynamically rendering the icon */}
            <h3 className='heading-gradient'>{product.name}</h3>
            <p>{product.description}</p>
            <div className="btn-container">
              <Link to={product.link} className="learn-more btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
