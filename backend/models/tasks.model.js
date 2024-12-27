const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({

    title: {
        type: String,
        require: true
    },

    description: {
        type: String,
        require: true
    },

    status: {
        type: String,
        enum: ['TODO', 'DONE'],
        default: 'TODO',       
    },
  
    deadline: {
        type: Date,
        require: true
    },
    linkedFile: {
        data: Buffer,
        contentType: String
    }
}, {
    timestamps: true,
  })

const taskModel = mongoose.model('tasks', taskSchema)

module.exports = taskModel