const express = require('express');
const router = express.Router();
const { postProduct } = require('../controllers/farmerController');
const authMiddleware = require('../middlewares/auth');

// Farmer posts a product
router.post('/product', authMiddleware, postProduct);

module.exports = router;
