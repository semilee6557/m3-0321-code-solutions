import React from 'react';

class Title extends React.Component {
  render() {
    const title = this.props.title;
    const id = this.props.id;
    return (
      <tr className="title">
        <td id={id}>{title}</td>
      </tr>
    );
  }
}

class Content extends React.Component {
  render() {
    const content = this.props.content;
    return (
        <tr>
          <td>{content}</td>
        </tr>
    );
  }
}

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickedId: '' };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const id = event.target.id;
    if (this.state.clickedId === id) {
      this.setState({ clickedId: '' });
    } else {
      this.setState({ clickedId: id });
    }
  }

  render() {
    const rows = [];
    this.props.topics.forEach(topic => {
      rows.push(<Title id={topic.id} title={topic.title} />);
      if (this.state.clickedId === topic.id) {
        rows.push(<Content content={topic.content} />);
      }
    });

    return (
      <table className="table table-bordered" >
        <tbody onClick={this.handleClick}>
         {rows}
        </tbody>
      </table>
    );
  }
}

export default Accordion;
