import express from 'express';
import {  getAllProducts, getProductById, createProduct, deleteProduct, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.get("/products", getAllProducts)
router.get("/products/:id", getProductById)
router.post("/products", createProduct);
router.delete("/products/:id", deleteProduct);
router.put("/products/:id", updateProduct); 

export default router;