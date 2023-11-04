const express = require("express");
const router = express.Router();

// Home
router.get('/', (req, res) => {
    res.json({
        message: "WE ARE ONLINE"
    })
})

module.exports = router;