const CategoryModel = require("../models/category")
const ProductModel = require("../models/product")
const CommentModel = require("../models/comment")
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
const category = async(req, res)=>{
    const id = req.params.id
    const category = await CategoryModel.findById(id)
    const products = await ProductModel.find({cat_id: id})
    const total = products.length;
    // console.log(products)
    res.render("site/category", {category, products, total});
}
const product = async(req, res)=>{
    const id = req.params.id
    const product = await ProductModel.findById(id)
    const comments = await CommentModel.find({prd_id: id})
    res.render("site/product", {product, comments});
}
const comment = async(req, res)=>{
    const prd_id = req.params.id
    const {full_name, email, body} = req.body
    const comment = {
        prd_id,
        full_name,
        email,
        body
    }
    await CommentModel(comment).save()
    res.redirect(req.path)
}

const search = async(req, res)=>{
    const keyword = req.query.keyword  || ""
    const products = await ProductModel.find({
        $text: {
            $search: keyword
        }
    })
    console.log("check",products)
    res.render("site/search", {products, keyword});
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
    comment
}