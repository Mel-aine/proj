const commande = require ('../models/commande')
const restaurant = require ('../models/restaurant')

const define=()=>{
    restaurant.hasMany(commande, {
        foreignKey: 'id_restaurant'
    });
    commande.belongsTo(restaurant , { targetKey: 'id_restaurant', foreignKey: 'id_restaurant' });
}
module.exports = {define};