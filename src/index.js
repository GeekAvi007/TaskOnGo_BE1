const express = require('express')

const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth.routes.js');
const noteRoutes = require('./routes/note.routes.js');
const errorHandler = require('./middleware/errorHandler.js')

app.use('/api/auth', authRoutes)
app.use('/api/notes', noteRoutes)
app.use(errorHandler);

module.exports = app;