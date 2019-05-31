import React, {Component} from 'react';
import axios from 'axios';

function Product(props){
    console.log('PRODUCT', props.item)

        return(
            <main className='product'>
                <img src={props.item.image} alt='inventory pic'/>
                <section>
                    <h1>{props.item.name}</h1>
                    <h2>${props.item.price}</h2>
                </section>
            </main>
        )
}

export default Product