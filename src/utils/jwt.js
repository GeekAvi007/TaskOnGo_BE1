const jwt = require('jsonwebtoken');
exports.generateToken = user => jwt.sign(
  { userId: user._id, email: user.email },
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
);
