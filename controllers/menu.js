
const menu = require ('../orm/models/menu')

const createMenu= async({id_restaurant, Dish,Name,Description,  id_categorie,Price})=>{

    const resto=await menu.create({ 
        image : Dish,
        name : Name,
        description : Description,
        price : Price,
        id_restaurant ,
        id_categorie ,

    })
    return resto
}

module.exports ={createMenu}