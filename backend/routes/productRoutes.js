import express from 'express';
import { getProducts, getProduct } from '../controllers/productController.js';

const router = express.Router();

// @desc     Fetch All Products
// @method   GET
// @endpoint /api/products
// @access   Public
router.get('/', getProducts);

// @desc     Fetch Single Product
// @method   GET
// @endpoint /api/products/:id
// @access   Public
router.get('/:id', getProduct);

export default router;
