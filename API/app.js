require('dotenv').config();
debugger
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);
const db = mongoose.connection;

db.on('error', (error) => { console.error(error) });
db.on('open', () => { console.log('Databse connection.', process.env.DATABASE_URL) })

app.use(cors());
app.use(express.json());

//ROUTES


//LISTEN
app.listen(3000, () => { console.log('Server Started 1...2...3...4!!') });