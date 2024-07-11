const admin = require('../config/firebase-config');

class Middleware {
  async decodeToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];
    try {
      const decodeValue = await admin.auth().verifyIdToken(token);
      console.log(decodeValue);
      if (decodeValue) {
        return next();
      } else {
        return res.status(401).json({ message: 'Unauthorized' });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: err.message });
    }
  }
}

module.exports = new Middleware();
