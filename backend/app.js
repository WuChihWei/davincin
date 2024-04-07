const mysql = require("mysql");
const express = require('express');

const app = express();
const hostname = '127.0.0.1'; // Your server ip address
const port = 3000;

// main page
app.get('/', (req, res) => {
    res.send(`Server is up!`);
})

// Include routes file
const collectionsRoute = require('./routes/collections');
app.use('/collections', collectionsRoute);
const profilesRoute = require('./routes/profiles');
app.use('/profiles', profilesRoute);


    /*
// Connect MYSQL
const connection = mysql.createConnection({
  host:      process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_NAME,
  port     : process.env.DB_PORT,
});
connection.connect(function(err) {
  if (err) console.log(err.message) ;
  console.log("Successfully connected");
});
*/

// Health check
app.get('/health', (req, res) => {
    res.status(200).send(`Health Check...`);
})

app.listen(port, () => {
    console.log(`Server running...`);
})
