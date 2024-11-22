   
const { DataTypes } = require ('sequelize');
let Db = require ("../db.js");

const Users = Db.define('Users', {
    id_utilisateur: {
        type: DataTypes.INTEGER.UNSIGNED,  
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('admin', 'editor', 'viewer'), 
        allowNull: false,
        defaultValue: 'viewer',
    },

    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        
    },
    lastname: {
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
        validate :{
            isNumeric : true
        },
        
    },
    email: {
        type: DataTypes.STRING,
        validate :{
            isEmail: true
        },
        unique : true ,
        allowNull: false,
    
    },
    password: {
        type: DataTypes.STRING(64),
        allowNull: false
    }
   
   
});

module.exports = Users;