
const menu = require ('../orm/models/menu')

const createMenu= async({id_restaurant, Dish,Name,Description,Category,Price})=>{

    const resto=await menu.create({ 
        image : Dish,
        name : Name,
        description : Description,
        category : Category,
        price : Price,
        id_restaurant 
    })
    return resto
}

module.exports ={createMenu}