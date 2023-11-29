const Event = require('../models/event');

// Get all the events
const getEvents = async (req, res) => {
    try {
        // Get the all events from database
        const events = await Event.find({});
        res.send(events);
        console.log('send events')

    } catch (err) {
        res.status(500).send(err)
    }
}

// Get events by location
const getEventsByLocation = async (req, res) => {
    const eventZipcode = req.params.zipcode;
    try {

        const events = await Event.find({ zipcode: eventZipcode });
        res.send(events);
    } catch (err) {
        res.status(500).send(err);
    }
}

// Get event by eventId
const getEventByEventId = async (req, res) => {
    const eventId = req.params.eId;
    console.log(eventId);
    try {

        const event = await Event.findById(eventId);
        res.send(event);

    } catch (err) {
        res.status(500).send(err);
    }
}

// Get event by userId
const getEventsByUserId = async (req, res) => {
    const userId = req.params.creatorId;
    try {

        const events = await Event.find({ creator: userId });
        res.send(events);
    } catch (err) {
        res.status(500).send(err);
    }
}

// Create a new event
const createEvent = async (req, res) => {
    try {

        const { title, startDate, endDate, time, location, address, zipcode, link, fee, description, creator } = req.body;
        // Get the request body
        const newEvent = new Event({
            title,
            startDate,
            endDate,
            time,
            location,
            address,
            zipcode,
            link,
            fee,
            description,
            img: 'https://www.pomonaca.gov/home/showpublishedimage/2701/638130945648630000',
            creator
        });

        // Save it to the database
        let event = await newEvent.save();
        event = event.toObject();

        // Send the response
        res.status(201).send(event);

    } catch (err) {
        res.status(500).send(err)
    }
}

// Modify event
const modifyEvent = async (req, res) => {

}


exports.getEvents = getEvents;
exports.getEventsByLocation = getEventsByLocation;
exports.getEventByEventId = getEventByEventId;
exports.getEventsByUserId = getEventsByUserId;
exports.createEvent = createEvent;