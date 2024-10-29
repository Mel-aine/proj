const commande = require ('../orm/models/commande');

const createCommande = async({ id_owner, Statut,Date,id_restaurant})=>{

    const cmd=await commande.create({ 
        
        statut : Statut,
        date : Date,
        id_owner,
        id_restaurant
    })
    return cmd
}

module.exports ={createCommande}