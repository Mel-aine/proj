const { DataTypes } = require ('sequelize');
let Db = require ("../db.js");

const Horaires = Db.define('Horaires', {
    id_horaire: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    id_restaurant: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        
    },
    day: {
        type: DataTypes.ENUM,
        values : ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'],
        
        allowNull: false,
    },
    opening_hour: {
        type: DataTypes.TIME,

        allowNull: false,
    },
    closing_hour: {
        type: DataTypes.TIME,

        allowNull: false,
    },
    
   
});

module.exports = Horaires;