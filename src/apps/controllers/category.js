const index = (req, res)=>{
    res.send("/admin/categories");
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