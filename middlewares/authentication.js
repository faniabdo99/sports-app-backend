import jwt from 'jsonwebtoken'
const authenticateUser = (req, res, next) => {
  // Get the token from the request headers, cookies, or wherever it's stored
  const token = req.headers.authorization;

  if (!token) {
    // No token provided, user is not authenticated
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Verify the token and decode the user information
    const decoded = jwt.verify(token, process.env.JWT_ENCRYPTION_KEY);

    // Attach the user object to the request for further use
    req.user = decoded.user;

    // Move to the next middleware or route handler
    next();
  } catch (error) {
    // Token is invalid
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = authenticateUser;
