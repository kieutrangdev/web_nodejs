const UserModel = require("../models/user");

const login = (req, res)=>{
    res.render("admin/login", {data:{}});
}
const postLogin = async (req, res)=>{
    let error;
    let email =  req.body.email
    const users = await UserModel.find({email: req.body.email, password: req.body.password});
    if(req.body.email == ""){
        error = "Tài khoản không được để trống !"
    }
    else if(req.body.password == ""){
        error = "Mật khẩu không được để trống !";
    }
    else if(users.length > 0){
        req.session.email = email
        res.redirect("/admin/dashboard");
    }
    else{
        error = "Tài khoản không hợp lệ !";
    }
    res.render("admin/login", {data:{error: error}});
}

const logout = (req, res)=>{
    req.session.destroy()
    res.redirect("/admin/login");
}

module.exports = {
    login:login,
    postLogin:postLogin,
    logout:logout,
}