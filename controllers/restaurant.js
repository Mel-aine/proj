
const restaurant = require ('../orm/models/restaurant')

const createRestaurant= async({Address,Phone,Email,Service,Website,Name,Logo,Description,id_proprio})=>{

    const r=await restaurant.create({ 
        address: Address,
        phone: Phone,
        email: Email,
        service : Service,
        website : Website,
        name : Name,
        logo : Logo,
        description : Description,
        id_proprio 
    })
    return r
}

module.exports ={createRestaurant}