import React, {Component} from 'react';
import axios from 'axios';

class Product extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }



    render(){
        let {inventory} = this.props;
        // console.log('Product', inventory)

        return(
            <main>
                <img src={inventory.image} alt='inventory pic'/>
                <h1>{inventory.name}</h1>
                <h2>${inventory.price}</h2>
            </main>
        )
    }
}

export default Product