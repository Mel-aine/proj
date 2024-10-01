
const menu = require ('../models/menu')
const categorie = require ('../models/categorie')

const define=()=>{
    categorie.hasMany(menu, {
        foreignKey: 'id_categorie'
    });
    menu.belongsTo(categorie , { targetKey: 'id_categorie', foreignKey: 'id_categorie' });
}
module.exports = {define};