const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const taskSchema = new Schema({
    body: String,
    day: String,
    imp: Boolean
});

taskSchema.set('toJSON', {
    transform: (doc, retDoc) => {
        retDoc.id = retDoc._id.toString(),
        delete retDoc._id;
        delete retDoc.__v;
    }
});

const Task = model('Task', taskSchema);

module.exports = {
    Task
};