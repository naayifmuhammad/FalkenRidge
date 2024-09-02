import React from 'react';
import data from '../data/data.json';

const SoftwareDevelopment = () => {
  return (
    <section id="software-development">
      <h2>Software Development</h2>
      <p>{data.softwareDevelopment.description}</p>
    </section>
  );
};

export default SoftwareDevelopment;
