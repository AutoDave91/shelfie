import React, {Component} from 'react';
import axios from 'axios';
import Product from '../Product/Product';

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
           
        }
    }


    render(){
        return(
            <main>
                <h1>Dashboard</h1>
                {/* {this.props.inventory.map((item, index)=>(
                <Product key={index} item={item} inventory={this.props.inventory}/>
                ))} */}
            </main>
        )
    }
}

export default Dashboard