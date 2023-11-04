import express from 'express'
import db from '../models/index.js'
const router = express.Router();

/**
 * Create new user
 * POST /users/
 **/
router.post('/', (req, res) => {
    // Save the data to the database
    db.User.create(req.body).then(response => {
        res.json(response)
    }).catch(error => {
        console.log(error)
        res.json(error)
    })
})

/**
 * Return all users endpoint
 * GET /users/
 **/
router.get('/', (req, res) => {
    db.User.findAll().then(users =>{
        res.json(users)
    }).catch(error => {
        res.json(error)
    })
})

/**
 * Return a single user
 * GET /users/
 * params (one): uuid, email, phoneNumber, code, username
 **/
router.get('/:by/:value', (req, res) => {
    // Determine the filter type
    db.User.findOne({ where: { [req.params.by]: req.params.value} }).then(user => {
        res.json(user)
    }).catch(error => {
        res.sendStatus(404);
    })
})


export default router;