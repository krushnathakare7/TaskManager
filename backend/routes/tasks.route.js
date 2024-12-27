const express = require('express');
const Tasks = require('../models/tasks.model');
const {getTask,newTask, editTask, deletetask} = require('../controllers/task.controller')

const upload = require('../config/multerConfig')

const router = express.Router();



router.get('/', getTask)

router.post('/', upload.single('pdf'), newTask)

router.patch('/:id', editTask)

router.delete('/:id', deletetask);

module.exports = router