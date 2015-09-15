'use strict';

// import Hello from './components/Hello.js';

// var hello = new Hello('Hello');

// hello.say();
// hello.later().then(() => hello.say());

import Rectangle from './components/Rectangle.js';

let rectangle = new Rectangle(1.0);
console.log(rectangle.width);

var HelloReact = React.createClass({
  render() {
    return (
      <div className="container">Hello {this.props.name}</div>
    );
  }
});

React.render(<HelloReact name="React" />, document.getElementById("react"));