const router = require('express').Router();
const auth = require('../middleware/auth.js');
const { noteValidate } = require('../middleware/validator.js')

const {
    createNote, getNotes, getNote, updateNote, deleteNote
} = require('../controller/note.controller.js')

router.post('/',auth, noteValidate,createNote);

router.get('/', auth,getNotes);
router.get('/:id',auth,getNote);

router.put('/:id', auth, noteValidate, updateNote);

router.delete('/:id', auth,deleteNote);

module.exports = router