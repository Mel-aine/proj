const horaire = require ('../models/horaire')
const restaurant = require ('../models/restaurant')

const define=()=>{
    restaurant.hasMany(horaire, {
        foreignKey: 'id_restaurant'
    });
    horaire.belongsTo(restaurant , { targetKey: 'id_restaurant', foreignKey: 'id_restaurant' });
}
module.exports = {define};