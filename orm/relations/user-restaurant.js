const user = require ('../models/user')
const restaurant = require ('../models/restaurant')

const define=()=>{
    user.hasMany(restaurant, {
        foreignKey: 'id_proprio'  //
    });
    restaurant.belongsTo(user , { targetKey: 'id_utilisateur', foreignKey: 'id_proprio' });
}
module.exports = {define};