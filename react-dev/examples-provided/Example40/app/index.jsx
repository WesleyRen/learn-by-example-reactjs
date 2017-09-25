import React from 'react';
import {render} from 'react-dom';
import Box from "./BoxComponent.jsx"
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'

class App extends React.Component {

  constructor(props) {
  	super(props);

  }	

  //render () {
  //	// Step 1: First set up the routes with no IndexRoute
  //	// Step 2: Add in the NotFound component
  //	// Step 3:
  //	// Set up the links to navigate between routes
  //	// We want the links to be part of every route so they
  //	// always show up at the top of the page
  //	// This is done using a very specific design pattern
  //	// -- First show how we can't add in the links directly
  //	// -- Adding under Router, that is not in any path
  //	// Step 4:
  //	// Add the NavBar and the Container
  //	// SEt up the container on the path="/"
  //	// Set up the index route indicates that when you go
  //	// to the / path the indexroute is the child component
  //	// that you render.
 	//return (
 	//	<div>
	//        <Router history={hashHistory}>
	//  			<Route path='/' component={Container}>
	//  				<IndexRoute component={RedBox} />
	//    			<Route path='/green' component={GreenBox} />
	//    			<Route path='/blue' component={BlueBox} />
	//    			<Route path='/red' component={RedBox} />
	//    			<Route path='*' component={NotFound} />
	//			</Route>
	//		</Router>
  //      </div>
  //  );
  //}
	render () {
		return (
			<div>
				<Router history={hashHistory}>
					<Route path='/' component={RedBox} />
					<Route path='/green' component={GreenBox} />
					<Route path='/blue' component={BlueBox} />
					<Route path='/red' component={RedBox} />
				</Router>
			</div>
		);
	}
}

class NavBar extends React.Component {
	render() {
		return  (
			<div>
				<Link className="link" to="/red">
	   				Red
				</Link>
				<Link className="link" to="/green">
					Green
				</Link>
				<Link className="link" to="/blue">
					Blue
				</Link>
			</div>
		);
	}
}

class Container extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<NavBar />
				{this.props.children}
			</div>
		);
	}
}


function BlueBox(props) {
    return <Box color="blue"></Box>;
}

function RedBox(props) {
    return <Box color="red"></Box>;
}

function GreenBox(props) {
    return <Box color="green"></Box>;
}

// Add this before the links and show how it works in the
// browser.
function NotFound(props) {
    return <h2>Ooops... this page is not available on this server</h2>;
}


render(<App/>, document.getElementById('app'));

