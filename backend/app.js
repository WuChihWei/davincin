const fs = require('fs');
const mysql = require("mysql");
const express = require('express');
const app = express();
const hostname = '127.0.0.1'; // Your server ip address
const port = 3000;

// main page
app.get('/', (req, res) => {
    res.send(`Server is up!`);
})

// Get Collection Data
app.get('/collections', (req, res)=> {
    // read file
    fs.readFile('./Collections.json', 'utf-8', (err, data)=> {
        if (err) {
            return res.status(500).send("Sorry, something went wrong!");
        }
        const collections = JSON.parse(data);
        return res.json({collections: collections})
    })
})

app.get('/collections/:id', (req, res) => {
    const id = parseInt(req.params.id, 10)-1;
    fs.readFile('./Collections.json', 'utf-8', (err, data)=> {
        if (err) {
            return res.status(500).send("Sorry, something went wrong!");
        }
        const collections = JSON.parse(data);
        return res.json({collections: collections[id]})
    })
        
    })

// Connect MYSQL
/*const connection = mysql.createConnection({
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
