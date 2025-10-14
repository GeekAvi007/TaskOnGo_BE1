module.exports = (err, req, res, next)=>{
    res.status(500).json({
        type: 'Server Error',
        messages: 'Internal Error',
        errors: err.details || []
    })
}