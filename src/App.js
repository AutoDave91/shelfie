import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state ={
      inventory:[]
    }
  }

  componentDidMount(){
    axios
      .get('/api/inventory')
      .then(response =>{
        this.setState({inventory: response.data})
        console.log('get request successful')
      })
      .catch(err =>{
        console.log('get request failed')
      })
  }

  render(){
    console.log('IN APP', this.state.inventory)
    return (
      <main className="App">
          <Header />
          <Dashboard />
          <Form />
      </main>
    );
  }
}

export default App;
