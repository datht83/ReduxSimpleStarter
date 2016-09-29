import React from 'react';
import ReactDOM from 'react-dom';
//Create new component . this component should produce
// some html
const App = function() {
  return <div>Hi!</>;
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
