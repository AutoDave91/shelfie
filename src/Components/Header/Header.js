import React, {Component} from 'react';
import axios from 'axios';
import '../main.css'

class Header extends Component {
    constructor(){
        super()
        this.state = {

        }
    }



    render(){
        return(
            <main className='header'>
                <h1>Header</h1>
            </main>
        )
    }
}

export default Header