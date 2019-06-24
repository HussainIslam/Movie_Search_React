import React from 'react';

import Movies from './components/Movies'
import Search from './components/Search'

import './App.css';

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      queryString: null
    };
  }

  stringChanged(queryString){
    this.setState({ queryString });
  }

  render(){
    return (
      <div className="App">
        <Search 
          onChange={this.stringChanged.bind(this)}
        />
        <header className="App-header">
          <div className="moviescontainer">
            <Movies string={this.state.queryString} />
          </div>
          
        </header>
      </div>
    );
  }
}
