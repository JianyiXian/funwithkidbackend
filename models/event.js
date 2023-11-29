const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    address: { type: String, required: true },
    zipcode: { type: String, required: true },
    link: { type: String },
    fee: { type: Number, default: 0 },
    description: { type: String, required: true },
    img: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, required: true, ref: 'User' }
})

module.exports = mongoose.model('Event', eventSchema);