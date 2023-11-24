import express from 'express';
import db from '../models/index.js';
import { standardResponse } from '../includes/responses.js';

const router = express.Router();

/**
 * Return all users endpoint
 * GET /users/
 * */
router.get('/', (req, res) => {
  db.User.findAll().then((users) => {
    res.json(users);
  }).catch((error) => {
    res.json(error);
  });
});

/**
 * Create new user
 * POST /users/
 * */
router.post('/', (req, res) => {
  // Save the data to the database
  db.User.create(req.body).then((response) => {
    res.json(response);
  }).catch((error) => {
    res.json(error);
  });
});

/**
 * Return a single user
 * GET /users/
 * params (one): uuid, email, phoneNumber, code, username
 * */
router.get('/:by/:value', (req, res) => {
  // Determine the filter type
  db.User.findOne({ where: { [req.params.by]: req.params.value } }).then((user) => {
    res.json(user);
  }).catch(() => {
    res.sendStatus(404);
  });
});

/**
 * Update a single user
 * PUT /users/:id
 */
router.put('/:id', (req, res) => {
  db.User.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.send(standardResponse(true, 'User has been updated'));
  }).catch(() => {
    res.send(standardResponse(false, 'Something went wrong during the update'));
  });
});
export default router;
