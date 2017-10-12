import React from 'react';
import ReactDOM from 'react-dom';

class Box extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete() {
    this.props.handleDelete(this.props.index);
  }

  render() {
    const boxStyle = {
      backgroundColor: this.props.color
    };

    return (
      <div className="box" style={boxStyle}
        onClick={this.handleDelete.bind(this)}>
      </div>
    );
  }
}

export default Box;
