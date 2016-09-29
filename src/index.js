import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import Searchbar from './components/search_bar';

const API_KEY = 'AIzaSyBx594lqavGZ8wm3KVPS5jmB71-HSvUIWk';


class App extends Component
    constructor(props) {
        super(props);
        this.state = {videos: []};

        YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
            this.setState({videos: data})
        });

    }
    render() {
        return (
          <div>
            <Searchbar />
          </div>
        );
    }

}
// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
