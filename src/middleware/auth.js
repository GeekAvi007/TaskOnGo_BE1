const jwt = require('jsonwebtoken')
module.exports = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]

    if(!token) return res.status(401).json(
        {
            type: 'AuthError',
            message: 'No Token Found!'
        }
    );
    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        res.status(401).json('Invalid Token', error)
    }
}