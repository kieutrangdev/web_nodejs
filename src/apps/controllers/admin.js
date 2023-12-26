const UserModel = require("../models/user");
const ProductModel = require("../models/product");

const index = async (req, res)=>{
    
    const users = await UserModel.find();
    const prodcuts = await ProductModel.find();
    if( req.session.email) {
        console.log('ok')
    }
    res.render("admin/dashboard", {users: users.length, prodcuts: prodcuts.length});
}

module.exports = {
    index:index,
}