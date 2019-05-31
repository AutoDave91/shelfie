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
      inventory:[],
      selected:[]
    }
    this.componentDidMount = this.componentDidMount.bind(this)
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
    // console.log('1')
    console.log('IN APP', this.state.inventory)
    let {inventory} = this.state;
    return (
      <main className="App">
          <Header />
          <section className='body'>
            <Dashboard inventory={inventory} componentDidMount={this.componentDidMount}/>
            <Form componentDidMount = {this.componentDidMount} selected={this.state.selected}/>
          </section>
      </main>
    );
  }
}

export default App;
