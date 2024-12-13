const User = require('../models/user');

exports.setPreferences = async (req, res) => {
  try {
    const { category, maxPrice, location } = req.body;
    const userId = req.user._id;

    const updatedUser = await User.findByIdAndUpdate(userId, {
      preferences: { category, maxPrice, location }
    }, { new: true });

    res.status(200).json({
      success: true,
      message: 'Preferences updated successfully',
      data: updatedUser.preferences,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ userId: req.user._id });
    res.status(200).json({ success: true, data: notifications });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
