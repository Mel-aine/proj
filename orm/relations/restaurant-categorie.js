const categorie = require ('../models/categorie');
const restaurant = require ('../models/restaurant')

const define=()=>{
    restaurant.hasMany(categorie, {
        foreignKey: 'id_restaurant'
    });
    categorie.belongsTo(restaurant , { targetKey: 'id_restaurant', foreignKey: 'id_restaurant' });
}
module.exports = {define};