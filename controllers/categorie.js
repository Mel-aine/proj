
const categorie = require ('../orm/models/categorie');

const createCategorie= async({Name,Description,id_menu})=>{

    const c=await categorie.create({ 
        name : Name,
        description : Description,
        id_menu
    })
    return c
}

module.exports ={createCategorie}