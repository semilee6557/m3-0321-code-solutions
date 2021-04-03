import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const images = [
  { address: '../dist/image/puppy_bulldog.jpeg', alt: 'bulldog', id: '1' },
  { address: '../dist/image/puppy_beagle.jpeg', alt: 'beagle', id: '2' },
  { address: '../dist/image/puppy_golden.jpeg', alt: 'golden', id: '3' },
  { address: '../dist/image/puppy_husky.jpeg', alt: 'husky', id: '4' },
  { address: '../dist/image/puppy_run.jpeg', alt: 'run', id: '5' }
];

ReactDOM.render(
  <Carousel images={images} />,
  document.querySelector('#root')
);
