const User = require('../models/user.model.js')
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/jwt.js');

exports.signup = async (req, res, next) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 10);
        const user = new User({ ...req.body, password: hash });
        await user.save();
        const token = generateToken(user);
        res.status(201).json({
            userId: user._id,
            email: user.email,
            token
        })
    } catch (error) {
        next({
            status: 400,
            type: 'SignupError',
            message: error.message
        });
    }
};

exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
            return next({ status: 401, type: 'LoginError', message: 'Invalid Credentials' })
        }
    } catch (error) {
        next(
            {
                status: 400,
                type: 'LoginError',
                message: error.message
            }
        )
    }
}