const express = require('express');
const router = express.Router();

const authController = require('../controllers/admin/auth.controller');
const productController = require('../controllers/admin/product.controller');
const userController = require('../controllers/admin/user.controller');
const orderController = require('../controllers/admin/order.controller');

const adminMiddleware = require('../middlewares/admin.middleware');

router.post('/login', authController.authenticate);

router.use(adminMiddleware);

router.get("/products", productController.index)
    .get("/products/:id", productController.show)
    .post("/products", productController.store)
    .put("/products/:id", productController.update)
    .delete("/products/:id", productController.destroy);

router.get("/users", userController.index)
    .get("/users/:id", userController.show)
    .post("/users", userController.store)
    .put("/users/:id", userController.update)
    .delete("/users/:id", userController.destroy);

router.get("/orders", orderController.index)
    .get("/orders/:id", orderController.show)
    .post("/orders/confirm/:id", orderController.confirm)
    .delete("/orders/:id", orderController.destroy);

module.exports = router;
