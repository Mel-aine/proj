const menu = require ('../models/menu')
const commande = require ('../models/commande')
const ligneCommande = require ('../models/ligneCommande')

const define=()=>{
    menu.belongsToMany(commande, { through: ligneCommande, foreignKey: 'id_menu', otherKey: 'id_commande'  });
    commande.belongsToMany(menu, { through: ligneCommande, foreignKey: 'id_commande', otherKey: 'id_menu'  });

    
}
module.exports = {define};