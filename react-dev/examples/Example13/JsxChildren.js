function RedText(props) {
  return <div className="red">{props.children}</div>
}
function GreenText(props) {
  return <div className="green">{props.children}</div>
}

ReactDOM.render(<RedText>Hello</RedText>,
  document.getElementById('outer1'));

ReactDOM.render(
  <RedText>
    Some nested elements:
    <span><i>here</i></span> &amp; <span><b>here</b></span>
  </RedText>,
  document.getElementById('outer2')
);

ReactDOM.render(
  <GreenText>
    Some nested elements:
    <RedText>here</RedText> &amp; <RedText>here</RedText>
  </GreenText>,
  document.getElementById('outer3')
);
