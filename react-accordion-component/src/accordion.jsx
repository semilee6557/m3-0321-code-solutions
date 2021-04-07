import React from 'react';

function Title(props) {

  const title = props.title;
  const id = props.id;
  return (
      <tr className="title">
        <td id={id}>{title}</td>
      </tr>
  );

}

function Content(props) {
  const content = props.content;
  return (
        <tr>
          <td>{content}</td>
        </tr>
  );
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
    const rows = this.props.topics.map(topic => {
      return (
        <>
          <Title id={topic.id} title={topic.title} />
          {
            this.state.clickedId === topic.id
              ? <Content content={topic.content} />
              : null
          }
        </>
      );
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
