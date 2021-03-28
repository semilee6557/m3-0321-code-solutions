import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: '' };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const className = event.target.className;
    if (className === 'html' || className === 'css' || className === 'js') {
      if (this.state.clicked !== className) {
        this.setState({ clicked: event.target.className });
      } else {
        this.setState({ clicked: '' });
      }
    }
  }

  render() {

    let html = 'hide';
    let css = 'hide';
    let js = 'hide';

    if (this.state.clicked === 'html') {
      html = '';
    } else if (this.state.clicked === 'css') {
      css = '';
    } else if (this.state.clicked === 'js') {
      js = '';
    }

    return (
      <table className="table table-striped table-bordered" onClick={this.handleClick}>
        <tbody>
          <tr>
            <td className="html">
              Hypertext Markup Language
          </td>
          </tr>
          <tr>

            <td className={html}>Hypertext Markup Language (HTML) is the standard markup language for creating web pages and
            web
            applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies
            for the World Wide Web.</td>
          </tr>
          <tr>

            <td className="css">Cascading Style Sheets</td>
          </tr>
          <tr>

            <td className={css}>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation
            of a document
            written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web. alon a side
            HTML and JAvaScript.</td>
          </tr>
          <tr>

            <td className="js">JavaScript</td>
          </tr>
          <tr>

            <td className={js}>Javascript, often abbreviated as JS, is a high-level, interpreted programming language that
            conforms to
            the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based
            object-orientation. and first-class functions.</td>
          </tr>

        </tbody>
      </table>

    );
  }
}

export default Accordion;
