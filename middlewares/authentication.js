import jwt from 'jsonwebtoken'
const authentication = (req, res, next) => {
  // Get the token from the request headers, cookies, or wherever it's stored
  const token = req.headers.authorization;

  if (!token) {
    // No token provided, user is not authenticated
    return res.status(401).json({ 
        success: false,
        error: 'You are not allowed to view this page',
        errorCode: 401
     });
  }

  try {
    // Verify the token and decode the user information
    // a decoded_token is basically a string of the used UUID
    const decoded_token = jwt.verify(token, process.env.JWT_ENCRYPTION_KEY);

    // Attach the user object to the request for further use
    req.user = decoded_token.user;

    // Move to the next middleware or route handler
    next();
  } catch (error) {
    // Token is invalid
    return res.status(401).json(
        { 
            success: false,
            error: 'You are not allowed to view this page',
            errorCode: 401
         }
    );
  }
};

export default authentication;