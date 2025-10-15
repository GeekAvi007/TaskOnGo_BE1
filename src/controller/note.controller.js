const Note = require('../models/note.model.js');

exports.createNote = async (req, res, next) => {
    try {
        const note = new Note({ ...req.body, userId: req.user.userId });
        await note.save();
        res.status(201).json(note);
    } catch (error) {
        next({ status: 400, type: 'CreateError', message: error.message });
    }
};

exports.getNotes = async (req, res, next) => {
    try {
        const notes = await Note.find({ userId: req.user.userId })
        res.json(notes);
    } catch (error) {
        next({ status: 400, type: 'GetError', message: error.message });
    }
};

exports.getNote = async (req, res, next) => {
    try {
        const note = await Note.findOne({ _id: req.params.id, userId: req.user.userId });
        if (!note) return res.status(404).json({ type: 'Not Found!', message: 'Note Not Found!' })
        res.json(note);
    } catch (error) {
        next({ status: 400, type: 'GetError', message: error.message })
    }
};

exports.updateNote = async (req, res, next) => {
    try {
        const note = await Note.findOneAndUpdate({ _id: req.params.id, userId: req.user.userId },
            req.body,
            { new: true }
        );
        if(!note) return res.status(404).json({type: 'Not Found', message: 'Note Not Found!'})
            res.json(note);
    } catch (error) {
        next({ status: 400, type: 'UpdateError', message: error.message })
    }
}

exports.deleteNote = async(req,res,next) => {
    try {
        const note = await Note.findByIdAndDelete({
            _id: req.params.id,
            userId: req.user.userId
        });
        if(!note) return res.status(404).json({type: 'Not Found',message:'Note not found'});
        res.json('Note Deleted!')
    } catch (error) {
        next({status:400,type:'DeleteError',message:error.message})
    }
}