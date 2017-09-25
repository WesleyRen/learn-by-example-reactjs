import React from 'react';
import ReactDOM from 'react-dom';

class Box extends React.Component {
    constructor(props) {
        super(props);
   }

    render() {
        const boxStyle = {
            backgroundColor: this.props.color
        };

        return (
            <div className="box" style={boxStyle}>
            </div>
        );
    }
}


export default Box;

