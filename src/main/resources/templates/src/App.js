import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Body from './Body.js';

class App extends Component {

render(){
  return (
    <div className='App'>
     <header className="App-header">
              <h2 className="top-section">Nutri-heck</h2>
          </header>
          <main className="main-section">
          <Body/>
          </main>     
    </div>
    ) ;
  }
}

export default App;
