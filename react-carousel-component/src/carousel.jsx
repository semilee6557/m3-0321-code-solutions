import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeInterval: null,
      currentImg: {},
      puppyImageAddress: [
        { address: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*', alt: 'golden', id: '1' },
        { address: 'https://images.theconversation.com/files/377569/original/file-20210107-17-q20ja9.jpg?ixlib=rb-1.1.0&rect=278%2C340%2C4644%2C3098&q=45&auto=format&w=926&fit=clip', alt: 'husky', id: '1' },
        { address: 'https://urbananimalveterinary.com/wp-content/uploads/2019/11/puppy.jpg', alt: 'running', id: '3' },
        { address: 'https://iheartdogs.com/wp-content/uploads/2015/01/4577137586_5f4cf7fbd3_z-1.jpg', alt: 'bulldog', id: '1' },
        { address: 'https://cdn.royalcanin-weshare-online.io/UCImMmgBaxEApS7LuQnZ/v2/eukanuba-market-image-puppy-beagle?w=5596&h=2317&rect=574,77,1850,1045&auto=compress,enhance', alt: 'beagle', id: '1' }
      ]
    };
    this.imageChange = this.imageChange.bind(this);
  }

  imageChange() {

    const image = this.state.puppyImageAddress;
    const intervalId = setInterval(function () {

      for (let i = 0; i < image.length; i++) {
        if (i === 5) {
          i = 0;
        }
        this.setState({ currentImg: image[i] });
        this.setState({ currentIndex: i });
      }
    }
    , 3000);
    this.setState({ activeInterval: intervalId });

  }

  render() {
    const currentImg = this.state.currentImg;
    if (!this.state.activeInterval) {
      this.imageChange();
    }
    return (
      <div className="container">
      <div className="image-row-container">
        <div className="left-arrow"><i className="fas fa-chevron-left font-size"></i></div>
        <div className="image-container"><img src={currentImg.address} alt={currentImg.alt}/></div>
          <div className="right-arrow"><i className="fas fa-chevron-right font-size"></i></div>
          </div>
        <div className="page-icon-container">
          <div className="dot"><i className="fas fa-circle"></i></div>
          <div className="dot"><i className="far fa-circle"></i></div>
          <div className="dot"><i className="far fa-circle"></i></div>
          <div className="dot"><i className="far fa-circle"></i></div>
          <div className="dot"><i className="far fa-circle"></i></div>
        </div>
      </div>
    );
  }
}

export default Carousel;
