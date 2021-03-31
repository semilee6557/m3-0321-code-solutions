import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMenuClicked: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      isMenuClicked: !this.state.isMenuClicked
    });
  }

  render() {
    let hide = 'hide';
    let dark = '';
    if (this.state.isMenuClicked) {
      hide = '';
      dark = 'dark';
    }

    return (
      <div onClick={this.handleClick} className={`container ${dark}`}>
       <div>
        <i className="menu-icon fas fa-bars"></i>
       </div>
        <ul className={`menu-container ${hide}`} onClick={this.handleClick}>
          <h2 className="menu">Menu</h2>
          <li className="about"><a href="">About</a></li>
          <li className="getStarted"><a href="">Get Started</a></li>
          <li className="signIn"><a href="">Sign In</a></li>
       </ul>
      </div>
    );
  }
}

export default AppDrawer;
