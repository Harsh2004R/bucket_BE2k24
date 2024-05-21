const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {

    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ auth_error: "No token provided", _msg: "User is not authorized" });
    }

    // Verify token
    jwt.verify(token, 'bucket', (err, decoded) => {
        if (err) {
            return res.status(403).json({ auth_error: err.message, _msg: "User is not authorized" });
        }
        // Attach user ID to request object
        req.userId = decoded._id
        next();
    });
};

module.exports = { auth };