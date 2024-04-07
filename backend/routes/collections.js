// routes/collections.js
const express = require('express');
const fs = require('fs');

const router = express.Router();

// http://localhost:3000/collections
router.get('/', (req, res)=> {
    // read file
    fs.readFile('./Collections.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send("Sorry, something went wrong!");
        }
        const collections = JSON.parse(data);
        return res.json({collections: collections});
    })
})

// http://localhost:3000/collections/:id
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10)-1;
    fs.readFile('./Collections.json', 'utf-8', (err, data)=> {
        if (err) {
            return res.status(500).send("Sorry, something went wrong!");
        }
        const collections = JSON.parse(data);
        return res.json({collections: collections[id]})
    })
})

// export the router module so that app.js file can use it
module.exports = router;
