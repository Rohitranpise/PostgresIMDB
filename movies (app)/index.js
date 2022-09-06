const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const router = express.Router();
const gigRoutes = require('./gigs.router')


router.use('/', gigRoutes);
//Database Connection
const db = require('./config/config');
db.authenticate().then(() => {       //to check the if connection with the database is successful..
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})

const app = express();
//body parser returns middleware that parses json.
app.use(bodyParser.json({ limit: '50mb' })); //limit controls the max requests body size
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors("*"));
app.use('/', require('./gigs.router'));


const PORT = process.env.PORT || 5050;
db.sync().then(() => {           //db.sync updates the database with new tables or changes in the programe..
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
}).catch(err => console.log("Error: " + err));