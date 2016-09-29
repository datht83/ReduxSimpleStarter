import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './components/search_bar'

const API_KEY = 'AIzaSyBx594lqavGZ8wm3KVPS5jmB71-HSvUIWk';
//Create new component . this component should produce
// some html
const App = () => {
  return (
    <div>
      <Searchbar />
    </div>
  ); 
}


// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
