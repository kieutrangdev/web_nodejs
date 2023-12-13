const ProductModel = require("../models/product");

const index = async (req, res)=>{
    const page = parseInt(req.query.page) || 1;
    const limit = 10
    const skip = page * limit - limit
    const products = await ProductModel
    .find({})
    .populate({path: "cat_id"})
    .sort({_id: -1})
    .skip(skip)
    .limit(limit)
    ;

    res.render("admin/products/product", {data: {products: products}});
}
const create = (req, res)=>{
    
    res.render("admin/products/add_product");
}
const edit = (req, res)=>{
    
    res.render("admin/products/edit_product");
}
const del = (req, res)=>{
    res.send("/admin/products/delete/:id");
}

module.exports = {
    index:index,
    create:create,
    edit:edit,
    del:del,
}