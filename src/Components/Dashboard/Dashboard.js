import React, {Component} from 'react';
import axios from 'axios';
import Product from '../Product/Product';

class Dashboard extends Component {
    constructor(){
        super()
        this.state ={
          inventory:[]
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
        return(
            <main className='dashboard'>
                {/* <h1>Dashboard</h1> */}
                {this.state.inventory.map((item, index)=>(
                <Product key={index} item={item} inventory={this.state.inventory} componentDidMount={this.componentDidMount}/>
                ))}
            </main>
        )
    }
}

export default Dashboard