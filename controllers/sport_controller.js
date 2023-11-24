import express from 'express';
import db from '../models/index.js';
import { standardResponse } from '../includes/responses.js';

const router = express.Router();
/**
 * Return all sports endpoint
 * GET /sports/
 * */
router.get('/', (req, res) => {
  db.Sport.findAll().then((sports) => {
    res.json(sports);
  }).catch((error) => {
    res.json(error);
  });
});

/**
 * Create new sport
 * POST /sports/
 * */
router.post('/', (req, res) => {
  // Save the data to the database
  db.Sport.create(req.body).then((response) => {
    res.json(response);
  }).catch((error) => {
    res.json(error);
  });
});

/**
 * Return a single sport
 * GET /sports/
 * params (one): uuid
 * */
router.get('/:id', (req, res) => {
  db.Sport.findOne({ where: { id: req.params.id } }).then((sport) => {
    res.json(sport);
  }).catch(() => {
    res.sendStatus(404);
  });
});

/**
 * Update a single sport
 * PUT /sports/:id
 */
router.put('/:id', (req, res) => {
  db.Sport.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.send(standardResponse(true, 'Sport has been updated'));
  }).catch(() => {
    res.send(standardResponse(false, 'Something went wrong during the update'));
  });
});
export default router;
