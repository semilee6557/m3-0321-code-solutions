import React from 'react';

const dots = {
  blackDot: 'fas fa-circle',
  whiteDot: 'far fa-circle'
};

function Tag(props) {
  const dot = props.dot;
  const indexOfImage = props.indexOfImage;
  return (
    <div className="dot"><i className={`${dot} ${indexOfImage}`} ></i></div>
  );
}

class ImageElement extends React.Component {
  render() {
    const address = this.props.address;
    const alt = this.props.alt;

    return (
      <div className="image-container"><img src={address} alt={alt} /></div>
    );
  }
}

class DotIconLocation extends React.Component {
  render() {
    const location = this.props.id;
    const result = [];

    for (let i = 0; i < 5; i++) {
      if (i !== location) {

        result.push(<Tag dot={dots.whiteDot} indexOfImage={i.toString()}/>);
      } else {
        result.push(<Tag dot={dots.blackDot} indexOfImage={i.toString()}/>);
      }
    }

    return (
    <div className="page-icon-container">
      {result}
    </div>

    );
  }

}

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeInterval: null,
      currentImgInfo: {},
      currentIndex: 0,
      isClickedChangeImageIcon: false
    };

    this.imageChange = this.imageChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resumePlay = this.resumePlay.bind(this);
  }

  imageChange() {
    const images = this.props.images;
    let index = this.state.currentIndex;

    this.setState({ currentImgInfo: images[index] });

    const intervalId = setInterval(() => {
      index++;
      if (index === 5) {
        index = 0;
      }
      this.setState({ currentImgInfo: images[index] });
      this.setState({ currentIndex: index });
    }
    , 3000);
    this.setState({ activeInterval: intervalId });

  }

  handleClick(event) {
    clearInterval(this.state.activeInterval);
    this.setState({ activeInterval: null });
    this.setState({ isClickedChangeImageIcon: true });

    const classLists = event.target.classList;
    if (event.target.tagName === 'I') {
      for (let i = 0; i < classLists.length; i++) {
        if (classLists[i] === 'left-arrow') {
          let previousImgIndex = this.state.currentIndex - 1;
          if (previousImgIndex === -1) {
            previousImgIndex = 4;
          }
          this.setState({ currentIndex: previousImgIndex });
        } else if (classLists[i] === 'right-arrow') {
          let nextImgIndex = this.state.currentIndex + 1;
          if (nextImgIndex === 5) {
            nextImgIndex = 0;
          }
          this.setState({ currentIndex: nextImgIndex });
        } else {
          const getIndexFromDot = parseInt(classLists[2]);
          this.setState({ currentIndex: getIndexFromDot });
        }
      }
      const images = this.props.images;
      const index = this.state.currentIndex;

      this.setState({ currentImgInfo: images[index] });

    }

  }

  // nextImg() {

  // }

  // previousImg() {
  //   console.log('some');

  // }

  resumePlay() {
    this.setState({ isClickedChangeImageIcon: false });
  }

  componentDidMount() {
    if (!this.state.activeInterval && !this.state.isClickedChangeImageIcon) {
      this.imageChange();
    } else if (this.state.isClickedChangeImageIcon) {
      setTimeout(() => {
        this.resumePlay();
      }, 3000);
    }
  }

  render() {

    const currentImg = this.state.currentImgInfo;

    return (
      <div className="container">
      <div className="image-row-container">
          <div className="left-arrow" onClick={this.handleClick}><i className="fas fa-chevron-left font-size left-arrow"></i></div>
          <ImageElement address={currentImg.address} alt={currentImg.alt} />
        <div className="right-arrow" onClick={this.handleClick}><i className="fas fa-chevron-right font-size right-arrow"></i></div>
      </div>
      <div onClick={this.handleClick} >
        <DotIconLocation id={this.state.currentIndex} />
      </div>
      </div>
    );
  }
}

export default Carousel;
