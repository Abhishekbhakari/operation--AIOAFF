const Product = require('../models/Product');
const User = require('../models/user');

exports.postProduct = async (req, res) => {
  try {
    const { productName, category, price, description, quantity, unit } = req.body;
    const farmerId = req.user._id;

    const newProduct = await Product.create({
      farmerId,
      productName,
      category,
      price,
      description,
      quantity,
      unit,
    });

    // Notify buyers who match the product criteria
    notifyBuyers(newProduct);

    res.status(201).json({
      success: true,
      message: 'Product posted successfully',
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const notifyBuyers = async (product) => {
  try {
    const matchingBuyers = await User.find({
      'preferences.category': product.category,
      'preferences.maxPrice': { $gte: product.price },
    });

    matchingBuyers.forEach(buyer => {
      // Send push notifications, in-app notifications, and WhatsApp
      console.log(`Notification sent to ${buyer.email} for product ${product.productName}`);
      // You can integrate WhatsApp API or Firebase here for actual notifications
    });
  } catch (error) {
    console.error('Error in notifying buyers:', error.message);
  }
};
