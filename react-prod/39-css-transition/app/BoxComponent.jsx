import React from 'react';
import ReactDOM from 'react-dom';

class Box extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete() {
    this.props.handleDelete(this.props.index);
  }

  componentWillEnter (callback) {
    const el = ReactDOM.findDOMNode(this);
    //        (el, duration, from,                 to)
    TweenMax.fromTo(el, 0.5, {y: 200, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
  }

  componentWillAppear (callback) {
    const el = ReactDOM.findDOMNode(this);
    TweenMax.fromTo(el, 0.8, {x: -200, pacity: 0}, {x: 0, opacity: 1, onComplete: callback});
  }

  componentWillLeave (callback) {
    const el = ReactDOM.findDOMNode(this);
    TweenMax.fromTo(el, 0.5, {pacity: 1}, {x: 200, opacity: 0, onComplete: callback});
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
