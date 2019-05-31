import React, {Component} from 'react';
import axios from 'axios';

function Product(props){
    // console.log('PRODUCT', props.item)
    // console.log('PRODUCT', props.item.product_id)

        return(
            <main className='product'>
                <img src={props.item.image} alt='inventory pic'/>
                <section className='desc'>
                    <div>
                        <h1>{props.item.name}</h1>
                        <h2>${props.item.price}</h2>
                    </div>
                    <div className='buttons'>
                        <button className='productButts' onClick={()=>{
                            // console.log('PRODUCT', `delete pressed for product ${props.item.product_id}`)
                            axios.delete('/api/inventory/'+ props.item.product_id)
                                // .then(() =>{props.componentDidMount();});
                        }}>Delete</button>
                        <button className='productButts'>Edit</button>
                    </div>
                </section>
            </main>
        )
}

export default Product