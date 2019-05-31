const express = require('express');
const app = express();
const massive = require('massive');
require('dotenv').config();

const control = require('./controller');

app.use(express.json());

massive(process.env.CONNECTION_STRING)
    .then(db =>{
        app.set('db', db);
        console.log('Database connected!')
    })

// endpoints
app.get('/api/inventory', control.getInventory)
app.post('/api/product', control.addItem)
app.delete('/api/inventory/:product_id', control.deleteItem)
app.put('/api/inventory', control.editItem)

app.listen(process.env.SERVER_PORT, ()=>{
    console.log(`Listening to port ${process.env.SERVER_PORT}! `, 'Waiting on database...')
})