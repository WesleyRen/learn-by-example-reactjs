import React from 'react';
import {render} from 'react-dom';
import Box from './BoxComponent.jsx';

class App extends React.Component {
  render() {
    return (<Box />);
  }
}

render(<App/>, document.getElementById("app"));
