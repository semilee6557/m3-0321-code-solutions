import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const PuppyImages = [
  { address: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*', alt: 'golden', id: '1' },
  { address: 'https://images.theconversation.com/files/377569/original/file-20210107-17-q20ja9.jpg?ixlib=rb-1.1.0&rect=278%2C340%2C4644%2C3098&q=45&auto=format&w=926&fit=clip', alt: 'husky', id: '2' },
  { address: 'https://urbananimalveterinary.com/wp-content/uploads/2019/11/puppy.jpg', alt: 'running', id: '3' },
  { address: 'https://iheartdogs.com/wp-content/uploads/2015/01/4577137586_5f4cf7fbd3_z-1.jpg', alt: 'bulldog', id: '4' },
  { address: 'https://cdn.royalcanin-weshare-online.io/UCImMmgBaxEApS7LuQnZ/v2/eukanuba-market-image-puppy-beagle?w=5596&h=2317&rect=574,77,1850,1045&auto=compress,enhance', alt: 'beagle', id: '5' }
];

ReactDOM.render(
  <Carousel puppyImages={PuppyImages} />,
  document.querySelector('#root')
);
