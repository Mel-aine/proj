const Db = require ('./db')
const all_relation = require ('./relations/index')


const connect=async ()=>{
    await Db.authenticate()
    console.log("database connection ok") 
    all_relation.define();
    await Db.sync({ /*force : true,  alter:true */});
    console.log('Database connected successfully')
    
}
module.exports = {connect};