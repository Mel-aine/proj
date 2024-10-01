const { DataTypes } = require ('sequelize');
let Db = require ("../db.js");

const Menus = Db.define('Menus', {
    id_menu: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    id_restaurant: {
        type: DataTypes.INTEGER.UNSIGNED,
        
        allowNull: false,
    },
    image: {
        type: DataTypes.BLOB,
       // allowNull: false,
        
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        
    },
    id_categorie: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
   

   
});

module.exports = Menus;