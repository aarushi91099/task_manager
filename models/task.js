require('../models/db');

const mongoose = require('mongoose');


var taskSchema = new mongoose.Schema({
    tasks : {
        type: String
    }
});


var todos = module.exports = mongoose.model('todos', taskSchema);
