
const restaurant = require ('../orm/models/restaurant')

const createRestaurant= async({Address,Phone,Email,Service,Website,Name,id_proprio})=>{

    const u=await restaurant.create({ 
        address: Address,
        phone: Phone,
        email: Email,
        service : Service,
        website : Website,
        name : Name,
        id_proprio 
    })
    return u
}

module.exports ={createRestaurant}