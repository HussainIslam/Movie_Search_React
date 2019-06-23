import React from 'react';

import Movies from './components/Movies'
import Search from './components/Search'

import './App.css';

function App() {
  return (
    <div className="App">
      <Search />
      <header className="App-header">
        <div>
          <Movies />
        </div>
        
      </header>
    </div>
  );
}

export default App;
