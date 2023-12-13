const index = (req, res)=>{
    res.send("/admin/users");
}
const create = (req, res)=>{
    res.send("/admin/users/create");
}
const edit = (req, res)=>{
    res.send("/admin/users/edit/:id");
}
const del = (req, res)=>{
    res.send("/admin/users/delete/:id");
}

module.exports = {
    index:index,
    create:create,
    edit:edit,
    del:del,
}