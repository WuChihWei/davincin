// routes/users.js
const express = require('express');
const router = express.Router();

// http://localhost:3000/collections
router.get('/', (req, res) => {
    res.send('this is collections route');
});

// http://localhost:3000/collections/1
router.get('/1', (req, res) => {
    res.send('this is collections 1 route');
});

// http://localhost:3000/collections/2
router.get('/2', (req, res) => {
    res.send('this is collections 2 route');
});

// export the router module so that app.js file can use it
module.exports = router;
