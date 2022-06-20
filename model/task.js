const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type : String,
        required: true,
        trim: true,
        maxlength :[ 40,'name must be within 20 character']
    },
    completed: {
        type: Boolean,
        default : false
    },
    
})

module.exports = mongoose.model('Task', taskSchema);