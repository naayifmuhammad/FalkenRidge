import React from 'react';
import data from '../data/data.json';

const CloudSolutions = () => {
  return (
    <section id="cloud-solutions">
      <h2>Cloud Solutions</h2>
      <p>{data.cloudSolutions.description}</p>
    </section>
  );
};

export default CloudSolutions;
