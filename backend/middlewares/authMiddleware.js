const jwt = require('jsonwebtoken');

/**
 * Middleware to verify JWT token for authenticated users.
 */
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Access Denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET); // Bearer <token>
    req.user = decoded; // Attach user information (id, role) to the request object
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid Token.' });
  }
};

/**
 * Middleware to check if the user has a specific role (farmer, buyer, etc.).
 */
const checkRole = (role) => (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Access Denied. User not authenticated.' });
  }

  if (req.user.role !== role) {
    return res.status(403).json({ message: 'Access Denied. You do not have permission.' });
  }

  next();
};

module.exports = { verifyToken, checkRole };
