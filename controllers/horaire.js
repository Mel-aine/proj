
const horaire = require ('../orm/models/horaire');

const createHoraire= async({ Day, Opening_hour,Closing_hour,id_restaurant})=>{

    const hour=await horaire.create({ 
       
        day : Day, 
        opening_hour : Opening_hour,
        closing_hour : Closing_hour,
        id_restaurant
    })
    return hour
}

module.exports ={createHoraire}