const { DataTypes } = require ('sequelize');
let Db = require ("../db.js");

const Restaurants = Db.define('Restaurants', {
    id_restaurant: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    id_proprio: {
        type: DataTypes.INTEGER.UNSIGNED,
        
        allowNull: false,
        
    },
    logo: {
        type: DataTypes.BLOB,
    
        
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    website: {
        type: DataTypes.STRING,
        
    
    },
    email: {
        type: DataTypes.STRING,
        validate :{
            isEmail: true
        },
        unique :  true
    },
    service: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },


   
});

module.exports = Restaurants;