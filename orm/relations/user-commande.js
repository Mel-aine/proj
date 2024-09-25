const user = require ('../models/user')
const commande = require ('../models/commande')

const define=()=>{
    user.hasMany(commande, {
        foreignKey: 'id_owner'
    });
    commande.belongsTo(user , { targetKey: 'id_utilisateur', foreignKey: 'id_owner' });
}
module.exports = {define};