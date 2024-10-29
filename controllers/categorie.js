
const categorie = require ('../orm/models/categorie');

const createCategorie= async({Name,Description,id_restaurant})=>{

    const c=await categorie.create({ 
        name : Name,
        description : Description ,
        id_restaurant
    })
    return c
}

module.exports ={createCategorie}