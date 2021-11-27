require('dotenv').config({path: "./config.env"})
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const path = require("path");

//Connect DB
connectDB();

const app = express();

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));
app.use('/api/teacherDash', require('./routes/exam'));
app.use('/api/studentDash', require('./routes/exam'));

if (process.env.NODE_ENV === 'production') {
     app.use(express.static('client/build'))
     app.get('*', (req, res) => {
         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
     })
 }

// errorHandler should be last piece of middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`Server running on ${PORT}`));

process.on("unhandledRejection", (err, promise) =>{
     console.log(`Logged Error: ${err}`);
     server.close( () => process.exit(1) ); 
})