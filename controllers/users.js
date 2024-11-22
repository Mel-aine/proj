
const User = require ('../orm/models/user')

const createUser= async({FirstName,LastName,Address,
    Phone,  Email,Password,Role})=>{

    const u=await User.create({ 
            firstname: FirstName,
            lastname: LastName,
            address: Address,
            phone: Phone,
            email: Email,
            password: Password,
            role : Role
    })
    return u
}

module.exports ={createUser}