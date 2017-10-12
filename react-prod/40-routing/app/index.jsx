import React from 'react';
import {render} from 'react-dom';
import Box from './BoxComponent.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
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

render(<App/>, document.getElementById("app"));
