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
        validate :{
            isEmail: true
        },
        unique :  true
    
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    laststname: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    email: {
        type: DataTypes.STRING,
        validate :{
            isEmail: true
        },
        unique :true
    
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    service: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },


   
});

module.exports = Restaurants;