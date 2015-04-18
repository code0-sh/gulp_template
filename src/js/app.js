'use strict';
var d3 = require('d3');
console.log(d3);

import Hello from './components/Hello.js';

var hello = new Hello('Hello');

hello.say();
hello.later().then(() => hello.say());

var HelloReact = React.createClass({
  render() {
    return (
      <div className="container">Hello {this.props.name}</div>
    );
  }
});

React.render(<HelloReact name="React" />, document.getElementById("react"));