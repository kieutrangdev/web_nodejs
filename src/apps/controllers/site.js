const ProductModel = require("../models/product")
const home = async(req, res)=>{
    const featured = await ProductModel.find({
        featured: true,
        is_stock: true
    })
        .sort({_id: -1})
        .limit(6)
    const lastest = await ProductModel.find({
        is_stock: true
    })
        .sort({_id:-1})
        .limit(6)
    res.render("site/index", {featured, lastest});
}
const category = (req, res)=>{
    res.render("site/category");
}
const product = (req, res)=>{
    res.render("site/product");
}
const search = (req, res)=>{
    res.render("site/search");
}
const cart = (req, res)=>{
    res.render("site/cart");
}
const success = (req, res)=>{
    res.render("site/success");
}

module.exports = {
    home,
    category,
    product,
    search,
    cart,
    success,
}