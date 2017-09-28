import React from 'react';

class Box extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="box">
        Hello React From A Component!
      </div>
    );
  }
}

export default Box;
