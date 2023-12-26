const pagination = require("../../common/pagination");
const CategoryModel = require("../models/category")
const index = async (req, res)=>{
    const page = parseInt(req.query.page) || 1;
    const limit = 5
    const skip = page * limit - limit
    const totalRows = await CategoryModel.find().countDocuments()
    const totalPages = Math.ceil(totalRows / limit)
    const next = page + 1;
    const hasNext = page < totalPages ? true : false
    const prev = page - 1;
    const hasPrev = page > 1 ? true : false
    const categories = await CategoryModel
    .find({})
    .sort({_id: -1})
    .skip(skip)
    .limit(limit)
    ;

    res.render("admin/categories/category", 
    {data: {categories: categories},
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
const create = (req, res)=>{
    res.send("/admin/categories/create");
}
const edit = (req, res)=>{
    res.send("/admin/categories/edit/:id");
}
const del = (req, res)=>{
    res.send("/admin/categories/delete/:id");
}

module.exports = {
    index:index,
    create:create,
    edit:edit,
    del:del,
}