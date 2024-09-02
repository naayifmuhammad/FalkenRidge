import React from 'react';
import data from '../data/data.json';

const Consulting = () => {
  return (
    <section id="consulting">
      <h2>Consulting</h2>
      <p>{data.consulting.description}</p>
    </section>
  );
};

export default Consulting;
