const { DataTypes } = require ('sequelize');
let Db = require ("../db.js");

const Restaurants = Db.define('Restaurants', {
    id_restaurant: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    id_utilisateur: {
        type: DataTypes.INTEGER.UNSIGNED,
        
        allowNull: false,
    },
    logo: {
        type: DataTypes.BLOB,
        allowNull: false,
        
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
        }
        
    
    },
    horaire: {
        type: DataTypes.DATE,
        allowNull: false
    }
   
   
});

module.exports = Restaurants;