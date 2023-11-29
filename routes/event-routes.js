const express = require('express');

const { getEvents, createEvent, getEventsByLocation, getEventByEventId, getEventsByUserId } = require('../controllers/event-controllers');

const router = express.Router();

router.get('/all', getEvents);

router.get('/location/:zipcode', getEventsByLocation);

router.get('/id/:eId', getEventByEventId);

router.get('/user/:creatorId', getEventsByUserId);

router.post('/new', createEvent);

module.exports = router;