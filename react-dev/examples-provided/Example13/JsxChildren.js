
function RedText(props) {
    // The props.children property holds all the elements
    // between the component tags
    return <div className="red">{props.children}</div>
}

function GreenText(props) {
    // The props.children property holds all the elements
    // between the component tags
    return <div className="green">{props.children}</div>
}

// Children here is only the text element
ReactDOM.render(<RedText>Hello</RedText>,
    document.getElementById('outer1'));

// Here children represents a whole bunch of HTML. The
// HTML is unescaped so you just write JSX as though you
// were writing HTML
ReactDOM.render(
    <RedText>
        Some nested elements:
        <span><i>here</i></span> &amp; <span><b>here</b></span>
    </RedText>,
    document.getElementById('outer2'));

