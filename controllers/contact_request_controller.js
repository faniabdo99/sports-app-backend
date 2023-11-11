import express from 'express'
import db from '../models/index.js'
import { standardResponse } from '../includes/responses.js';
const router = express.Router();
/**
 * Return all contact_request endpoint
 * GET /contact_request/
 **/
router.get('/', (req, res) => {
    db.ContactRequest.findAll().then(contact_request =>{
        res.json(contact_request)
    }).catch(error => {
        res.json(error)
    })
})

/**
 * Create new contact_request
 * POST /contact_request/
 **/
router.post('/', (req, res) => {
    // Save the data to the database
    db.ContactRequest.create(req.body).then(response => {
        res.json(response)
    }).catch(error => {
        res.json(error)
    })
})

/**
 * Return a single contact_request
 * GET /contact_request/
 * params (one): uuid
 **/
router.get('/:id', (req, res) => {
    db.ContactRequest.findOne({ where: { id: req.params.id} }).then(contact_request => {
        res.json(contact_request)
    }).catch(error => {
        res.sendStatus(404);
    })
})

/**
 * Update a single contact_request
 * PUT /contact_request/:id
 */
router.put('/:id', (req, res) => {
    db.ContactRequest.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.send(standardResponse(true, 'ContactRequest has been updated'))
    }).catch(() => {
        res.send(standardResponse(false, 'Something went wrong during the update'))
    })
})
export default router;