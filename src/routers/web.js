const express = require("express");
const router = express.Router();

// Import Controller
const AuthController = require("../apps/controllers/auth");
const AdminController = require("../apps/controllers/admin");
const UserController = require("../apps/controllers/user");
const CategoryController = require("../apps/controllers/category");
const ProductController = require("../apps/controllers/product");
const TestController = require("../apps/controllers/test");
const { route } = require("../apps/app");

// Router Backend
const HomeController = (req, res)=>{
    res.send("<h1>Welcome NodeJS !</h1>");
}
router.get("/test", TestController.test);
router.post("/test1", TestController.test1);
router.get("/", HomeController);
// Auth
router.get("/admin/login", AuthController.login);
router.post("/admin/login", AuthController.postLogin);
router.get("/admin/logout", AuthController.logout);
// Admin
router.get("/admin/dashboard", AdminController.index);
// User
router.get("/admin/users", UserController.index);
router.get("/admin/users/create", UserController.create);
router.get("/admin/users/edit/:id", UserController.edit);
router.get("/admin/users/delete/:id", UserController.del);
// Category
router.get("/admin/categories", CategoryController.index);
router.get("/admin/categories/create", CategoryController.create);
router.get("/admin/categories/edit/:id", CategoryController.edit);
router.get("/admin/categories/delete/:id", CategoryController.del);
// Product
router.get("/admin/products", ProductController.index);
router.get("/admin/products/create", ProductController.create);
router.get("/admin/products/edit/:id", ProductController.edit);
router.get("/admin/products/delete/:id", ProductController.del);


// Router Frontend


module.exports = router;