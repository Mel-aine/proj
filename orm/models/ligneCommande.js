const { DataTypes } = require ('sequelize');
let Db = require ("../db.js");

const Lignes = Db.define('Lignes', {
    id_ligne: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    id_menu: {
        type: DataTypes.INTEGER.UNSIGNED,
        
        allowNull: false,
    },
    id_commande: {
        type: DataTypes.INTEGER.UNSIGNED,

        allowNull: false,
    },
    
   
});

module.exports = Lignes;