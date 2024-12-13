const express = require('express');
const router = express.Router();
const { setPreferences, getNotifications } = require('../controllers/buyerController');
const authMiddleware = require('../middlewares/auth');

// Set buyer preferences
router.put('/preferences', authMiddleware, setPreferences);

// Get notifications for the buyer
router.get('/notifications', authMiddleware, getNotifications);

module.exports = router;
