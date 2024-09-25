const menu = require ('../models/menu')
const restaurant = require ('../models/restaurant')

const define=()=>{
    restaurant.hasMany(menu, {
        foreignKey: 'id_restaurant'
    });
    menu.belongsTo(restaurant , { targetKey: 'id_restaurant', foreignKey: 'id_restaurant' });
}
module.exports = {define};