import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(){
        super()
        this.state = {
            image_URL: '',
            product_name: '',
            price: 0
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    render(){
        // console.log('IN FORM', this.state)
        return(
            <main>
                <h1>Form</h1>
                <form onSubmit={e=>{
                    e.preventDefault();
                }}>
                    <section className='inputs'>
                        <input name='image_URL' onChange={this.onChange} placeholder='image URL' />
                        <input name='product_name' onChange={this.onChange} placeholder='product name' />
                        <input name='price' type='number' onChange={this.onChange} placeholder='price' />
                    </section>
                    <section className='buttons'>
                        <button type='reset'>Cancel</button>
                        <button type='submit'>Add to Inventory</button>
                    </section>
                </form>
            </main>
        )
    }
}

export default Form