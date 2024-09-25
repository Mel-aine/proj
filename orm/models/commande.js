const { DataTypes } = require ('sequelize');
let Db = require ("../db.js");


const Commandes = Db.define('Commandes', {
    id_commande: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    id_owner: {
        type: DataTypes.INTEGER.UNSIGNED,
       
        allowNull: false,
    },
    id_restaurant: {
        type: DataTypes.INTEGER.UNSIGNED,
       
        allowNull: false,
    },
    statut: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        
    }
   
});

module.exports = Commandes;