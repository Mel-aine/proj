const {Sequelize} = require('sequelize');


let sequelize = new Sequelize('restau', 'root' ,  '' , {dialect:'mysql',host:'localhost'})

sequelize.sync(()=>{
    console.log('Database connected successfully')
})

module.exports = sequelize