import React, {Component} from 'react';

// const Searchbar = () => {
//   return <input />;
// };
class Searchbar extends Component {
    constructor (props) {
        super(props);
        this.state = {term: ''}
    }
    render() {
    //return <input onChange={this.onInputChange} />
    return (
        <div>
            <input
                value={this.state.term }
                onChange={(event) => this.setState({term: event.target.value})} />
            Value of the input: {this.state.term}
        </div>
    );
    }
  // onInputChange(event) {
  //    console.log(event.target.value);
  // }
}


export default Searchbar;
