import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(){
        super()
        this.state = {
            image_URL: '',
            name: '',
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
            <main className='form_container'>
                <h1>Form</h1>
                <form className='form' onSubmit={e=>{
                    e.preventDefault();
                    axios
                        .post('/api/product', {
                            image_URL: this.state.image_URL,
                            name: this.state.name,
                            price: this.state.price
                        })
                        .then(() =>{
                            this.props.componentDidMount()})
                          .catch(error => {
                            console.log(error);
                          })}
                }>
                    
                        <input name='image_URL' onChange={this.onChange} placeholder='image URL' />
                        <input name='name' onChange={this.onChange} placeholder='product name' />
                        <input name='price' type='number' onChange={this.onChange} placeholder='price' />
                    
                    
                        <button type='reset'>Cancel</button>
                        <button type='submit'>Add to Inventory</button>
                    
                </form>
            </main>
        )
    }
}

export default Form