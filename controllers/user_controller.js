import express from 'express'
import db from '../models/index.js'
const router = express.Router();

// Signup endpoint
router.post('/create', (req, res) => {
    // Save the data to the database
    db.User.create(req.body).then(response => {
        res.json(response)
    }).catch(error => {
        console.log(error)
        res.json(error)
    })
})
router.get('/new', (req, res) => {
    res.json({
        status: "User created"
    })
})
export default router;