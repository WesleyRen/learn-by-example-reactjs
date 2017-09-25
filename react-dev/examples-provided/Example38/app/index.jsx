import React from 'react';
import {render} from 'react-dom';
import Box from './BoxComponent.jsx'

// Step 1
import TransitionGroup from 'react-addons-transition-group';

class App extends React.Component {

  constructor(props) {
  	super(props);

  	this.state = {
  		boxColors: ['red']
  	};
  	this.handleAddBox = this.handleAddBox.bind(this);
  	this.handleDeleteBox = this.handleDeleteBox.bind(this);
  }	

  handleAddBox() {
  	var randomColor = this.props.colors[
  		Math.floor(Math.random() * this.props.colors.length)];
  	
  	var boxColors = this.state.boxColors.concat();
  	boxColors.push(randomColor);

  	this.setState({
  		boxColors: boxColors
  	});
  }

  handleDeleteBox(index) {
  	var boxColors = this.state.boxColors.concat();
  	boxColors.splice(index, 1);

  	this.setState({
  		boxColors: boxColors
  	});
  }

  render () {
	var i = 0;
    // Step 2
 	return (
 		<div>
 			<div>
		        <button className="button" onClick={this.handleAddBox}>
		            Add
		        </button>
	        </div>
	        <TransitionGroup>
	 		{
	 			this.state.boxColors.map((color) => 
	 				<Box index={i} color={color} 
	 					 key={i++}
	 					 handleDelete={this.handleDeleteBox} />
	 				
	 			)
	 		}
	 		</TransitionGroup>
        </div>
    );
  }
}

App.defaultProps = {
	colors: ['red', 'blue', 'green', 'orange', 'pink', 'violet']
};

render(<App/>, document.getElementById('app'));

