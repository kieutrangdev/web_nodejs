const pagination = require("../../common/pagination");
const CategoryModel = require("../models/category");
const ProductModel = require("../models/product");
const slug = require("slug")
const fs = require("fs")
const path  = require("path")

const index = async (req, res)=>{
    const page = parseInt(req.query.page) || 1;
    const limit = 10
    const skip = page * limit - limit
    const totalRows = await ProductModel.find().countDocuments()
    const totalPages = Math.ceil(totalRows / limit)
    const next = page + 1;
    const hasNext = page < totalPages ? true : false
    const prev = page - 1;
    const hasPrev = page > 1 ? true : false
    const products = await ProductModel
    .find({})
    .populate({path: "cat_id"})
    .sort({_id: -1})
    .skip(skip)
    .limit(limit)
    ;

    res.render("admin/products/product", 
    {data: {products: products},
     pages: pagination(page, totalPages), 
     totalPages,
      page, 
      next, 
      hasNext,
      prev,
      hasPrev
    }
    );
}
const create = async(req, res)=>{
    const categories =await CategoryModel.find()
    res.render("admin/products/add_product", {categories});
}
const edit = (req, res)=>{
    
    res.render("admin/products/edit_product");
}
const del = (req, res)=>{
    res.send("/admin/products/delete/:id");
}

const store = (req, res) => {
    const {file, body} = req
    const product = {
        description: body.description,
        price: body.price,
        cat_id: body.cat_id,
        status: body.status,
        featured: body.featured == "on",
        promotion: body.promotion,
        warranty: body.warranty,
        accessories: body.accessories,
        is_stock: body.is_stock,
        name: body.name,
        slug: slug(body.name),
    }; 
    if(file){
        const thumbnail = "products/"+file.originalname;
        fs.renameSync(file.path, path.resolve("src/public/admin/images/", thumbnail));
        product["thumbnail"] = thumbnail;
        new ProductModel(product).save();
        res.redirect("/admin/products");
    }
    
}

module.exports = {
    index:index,
    create:create,
    edit:edit,
    del:del,
    store: store
}