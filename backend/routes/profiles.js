// routes/profiles.js
const express = require('express');
const fs = require('fs');

const router = express.Router();
// Get Profile
router.get('/', (req, res)=> {
    // read file
    fs.readFile('./Profiles.json', 'utf-8', (err, data)=> {
        if (err) {
            return res.status(500).send("Sorry, something went wrong!");
        }
        const profiles = JSON.parse(data);
        return res.json({profiles: profiles})
    })
})

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10)-1;
    fs.readFile('./Profiles.json', 'utf-8', (err, data)=> {
        if (err) {
            return res.status(500).send("Sorry, something went wrong!");
        }
        const profiles = JSON.parse(data);
        return res.json({profiles: profiles[id]})
    })        
})

// export the router module so that app.js file can use it
module.exports = router;
