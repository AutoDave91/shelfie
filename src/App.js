import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import {HashRouter, Route, Switch, Link} from 'react-router-dom';
import routes from './routes';

class App extends Component {
  

  render(){
    return (
      <HashRouter>
        <main className="App">
            <Header />
            <Link className='links' to='/'>Dashboard</Link>
            <Link className='links' to='/add'>Add Inventory</Link>
          
            {routes}
        </main>
      </HashRouter>
    );
  }
}

export default App;
