const {Sequelize} = require('sequelize');


let sequelize = new Sequelize('restau_new', 'root' ,  '' , {dialect:'mysql',host:'localhost'})



module.exports = sequelize