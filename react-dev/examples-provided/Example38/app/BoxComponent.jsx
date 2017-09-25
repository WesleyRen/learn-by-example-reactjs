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

    // Step 4:
    // Called on components which are added to the transition group 
    // Called at the same time as componentDidMount
    componentWillEnter (callback) {
        const el = ReactDOM.findDOMNode(this);
        // TweenMax.fromTo( target:Object, duration:Number, fromVars:Object, toVars:Object ):TweenMax
        TweenMax.fromTo(el, 0.5, {y: 200, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
    }

    // Step 5:
    // Called on components which are removed from the transition group 
    // Called before componentWillUnmount. componentWillUnmount is called
    // after the callback() is executed.
    componentWillLeave (callback) {
        const el = ReactDOM.findDOMNode(this);
        TweenMax.fromTo(el, 0.5, {opacity: 1}, {x: 200, opacity: 0, onComplete: callback});
    }

    // Step 6:
    // Called when the component is already present when rendering the transition group.
   componentWillAppear(callback) {
        const el = ReactDOM.findDOMNode(this);
        TweenMax.fromTo(el, 0.8, {x: -200, opacity: 0}, {x: 0, opacity: 1, onComplete: callback});
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

