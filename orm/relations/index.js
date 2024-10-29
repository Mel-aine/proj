const ures_relation = require ('./user-restaurant')
const ucom_relation = require ('./user-commande')
const comres_relation = require ('./commande-restaurant')
const meres_relation = require ('./menu-resto')
const commen_relation = require ('./commande-menu')
const reshor_relation = require ('./restaurant-horaire')
const menucat_relation = require ('./menu-categorie')
const rescat_relation = require ('./restaurant-categorie')


const define=()=>{
    ures_relation.define();
    ucom_relation.define();
    comres_relation.define();
    meres_relation.define();
    commen_relation.define();
    reshor_relation.define();
    menucat_relation.define();
    rescat_relation.define();

}


module.exports = {define};