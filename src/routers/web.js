const express = require("express");
const router = express.Router();

// Import Controller
const AuthController = require("../apps/controllers/auth");
const AdminController = require("../apps/controllers/admin");
const UserController = require("../apps/controllers/user");
const CategoryController = require("../apps/controllers/category");
const ProductController = require("../apps/controllers/product");
const TestController = require("../apps/controllers/test");

const AuthMiddleware = require("../apps/middlewares/authMiddleware")
const UploadMiddleware = require("../apps/middlewares/upload")
const { route } = require("../apps/app");

// Router Backend
const HomeController = (req, res)=>{
    res.send("<h1>Welcome NodeJS !</h1>");
}
router.get("/test", TestController.test);
router.post("/test1", TestController.test1);
router.get("/", HomeController);
// Auth
router.get("/admin/login", AuthMiddleware.checkLogin ,AuthController.login);
router.post("/admin/login", AuthMiddleware.checkLogin,AuthController.postLogin);
router.get("/admin/logout",AuthMiddleware.checkAdmin, AuthController.logout);
// Admin
router.get("/admin/dashboard", AuthMiddleware.checkAdmin, AdminController.index);
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
router.get("/admin/products", AuthMiddleware.checkAdmin,ProductController.index);
router.get("/admin/products/create",AuthMiddleware.checkAdmin, ProductController.create);
router.post("/admin/products/store",
    UploadMiddleware.single("thumbnail"),
    AuthMiddleware.checkAdmin, ProductController.store);
router.get("/admin/products/edit/:id", AuthMiddleware.checkAdmin,ProductController.edit);
router.post("/admin/products/update/:id", 
    UploadMiddleware.single("thumbnail"),
    AuthMiddleware.checkAdmin,
    ProductController.update);
router.get("/admin/products/delete/:id", AuthMiddleware.checkAdmin,ProductController.del);


// Router Frontend


module.exports = router;