function BlueBox(props) {
  return <Box color="blue"></Box>
}

function RedBox(props) {
  return <Box color="red"></Box>
}

function GreenBox(props) {
  return <Box color="green"></Box>
}

function RandomBox(props) {
  const Boxes = [BlueBox, RedBox, GreenBox];
  const SomeBox = Boxes[props.index];
  return <SomeBox />
}

function Box(props) {
  const divStyle = {
    backgroundColor: props.color
  };

  return (
    <div className="box" style={divStyle}>
    </div>
  );
};

ReactDOM.render(<Box color="yellow" />, document.getElementById('outer0'));
ReactDOM.render(<BlueBox />, document.getElementById('outer1'));
ReactDOM.render(<RedBox />, document.getElementById('outer2'));
ReactDOM.render(<GreenBox />, document.getElementById('outer3'));
ReactDOM.render(<RandomBox index={Math.floor(Math.random() * 3)} />, document.getElementById('outer4'));
