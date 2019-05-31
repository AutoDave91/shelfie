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

module.exports={
    getInventory, addItem
}