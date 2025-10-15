require('dotenv').config();

const app = require('./src/app.js');

const mongoose = require('mongoose');

const dbConfig = require('./src/config/db.config.js');

const PORT = process.env.PORT || 5000;

mongoose.connect(dbConfig.url).then(()=>{
    console.log('Connected to DB!');
    app.listen(PORT,()=>console.log(`Server started on PORT: ${PORT}`));
}).catch(err => {
    console.error('DB Connection Failed', err.message)
})