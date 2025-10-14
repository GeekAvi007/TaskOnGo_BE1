const {body, validationResult } = require(express-validator)

exports.noteValidate = [
    body('title')
    .notEmpty()
    .withMessage('Title is Required!'),

    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) return res.status(400).json({
            type: 'ValidationError',
            errors: errors.array()
        });
        next();
    }
    
]
