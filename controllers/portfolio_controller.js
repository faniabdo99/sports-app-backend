import express from 'express';
import db from '../models/index.js';
import { standardResponse } from '../includes/responses.js';

const router = express.Router();
/**
 * Return all portfolio endpoint
 * GET /portfolio/
 * */
router.get('/', (req, res) => {
  db.Portfolio.findAll().then((portfolio) => {
    res.json(portfolio);
  }).catch((error) => {
    res.json(error);
  });
});

/**
 * Create new portfolio
 * POST /portfolio/
 * */
router.post('/', (req, res) => {
  // Save the data to the database
  db.Portfolio.create(req.body).then((response) => {
    res.json(response);
  }).catch((error) => {
    res.json(error);
  });
});

/**
 * Return a single portfolio
 * GET /portfolio/
 * params (one): uuid
 * */
router.get('/:id', (req, res) => {
  db.Portfolio.findOne({ where: { id: req.params.id } }).then((portfolio) => {
    res.json(portfolio);
  }).catch(() => {
    res.sendStatus(404);
  });
});

/**
 * Update a single portfolio
 * PUT /portfolio/:id
 */
router.put('/:id', (req, res) => {
  db.Portfolio.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.send(standardResponse(true, 'Portfolio has been updated'));
  }).catch(() => {
    res.send(standardResponse(false, 'Something went wrong during the update'));
  });
});
export default router;
