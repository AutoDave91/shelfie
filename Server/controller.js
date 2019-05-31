// const inventory = {

// }

const getInventory = (req, res)=>{
    let db=req.app.get('db');
    db.get_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(err=>{
            res.status(500).send({error: 'Error finding inventory.'});
            console.log('ERROR GETTING INVENTORY')
        })
}

module.exports={
    getInventory
}