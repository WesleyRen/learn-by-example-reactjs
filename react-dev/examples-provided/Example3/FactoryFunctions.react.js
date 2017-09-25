var listItem1 = React.DOM.li({key: 'item-1'}, 'Albus Dumbledore');
var listItem2 = React.DOM.li({key: 'item-2'}, 'Dolores Umbridge');
var listItem3 = React.DOM.li({key: 'item-3'}, 'Severus Snape');
var listItem4 = React.DOM.li({key: 'item-4'}, 'Minerva McGonagall');

var reactFragment = [listItem1, listItem2, listItem3, listItem4];

var listElement = React.DOM.ul({className: 'container'}, reactFragment);

ReactDOM.render(listElement, document.getElementById('react-app'));
