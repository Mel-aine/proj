   
const { DataTypes } = require ('sequelize');
let Db = require ("../db.js");

const Categories = Db.define('Categories', {
    id_categorie: {
        type: DataTypes.INTEGER.UNSIGNED,  
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    id_restaurant: {
        type: DataTypes.INTEGER.UNSIGNED,  
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        
    },
    
   
   
});

module.exports = Categories;