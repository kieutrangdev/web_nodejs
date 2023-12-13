const UserModel = require("../models/user");
const ProductModel = require("../models/product");
const CategoryModel = require("../models/category");

const test = async (req, res)=>{

    // console.log("first");
    // const st1 = 10
    // setTimeout(()=>{
    //     // console.log("second");
    //     const st2 = 5;
        
    // }, 1000);

    
    // console.log(st1 + st2);
    // console.log("last");

    // const promise = new Promise((res, rj)=>{
    //     setTimeout(()=>{
    //         const st2 = 5;
    //         res(st2);
    //     }, 1000);
    // });

    // promise.then((res)=>{
    //     console.log(res + st1);
    // });
    // const users = UserModel.find({email: "admin@gmail.com", password: "123456"}, (err, docs)=>{
    //     console.log(docs);
    // });


    const user = await UserModel.find({email: "admin@gmail.com", password: "123456"});
    console.log(user);

}
const test1 = (req, res)=>{
    
    console.log(req.body);
}

module.exports = {
    test:test,
    test1:test1,
}