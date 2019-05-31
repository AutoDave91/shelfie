const getInventory = (req, res)=>{
    let db=req.app.get('db');
    db.get_inventory()
        .then(inventory => res.status(200).json(inventory))
        .catch(err=>{
            res.status(500).send({error: 'Error finding inventory.'});
            console.log('ERROR GETTING INVENTORY')
        })
}
const addItem = (req, res)=>{
    let db=req.app.get('db');
    let {image_url, name, price} = req.body;

    db.create_product([image_url, name, price])
        .then(() => res.sendStatus(200))
        .catch(err=>{
            res.status(500).send({error: 'Error adding inventory.'});
            console.log('ERROR ADDING INVENTORY')
        })
}
const deleteItem = (req, res)=>{
    let db = req.app.get('db');
    let {id} = req.params;

    db.delete_product(id)
        .then(()=>res.sendStatus(200))
        .catch(err =>{
            res.status(500).send({error: 'Error deleting item.'})
            console.log('Error deleting')
        })
};
const editItem = (req, res)=>{
    let db = req.app.get('db');
    let {id} = req.params;
    let {desc} = req.query;

    db.edit_product([id, desc])
        .then(()=>res.sendStatus(200))
        .catch(err =>{
            res.status(500).send({error: 'Error editing product.'})
            console.log('Error editing')
        })
};

module.exports={
    getInventory, addItem, deleteItem, editItem
}