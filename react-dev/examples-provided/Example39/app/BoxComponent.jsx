import React from 'react';
// Step 3
import ReactDOM from 'react-dom';

class Box extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
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
                 onClick={this.handleDelete}>
            </div>
        );
    }
}

export default Box;

