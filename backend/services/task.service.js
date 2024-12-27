const taskModel = require('../models/tasks.model')


const findTasks = async () => {
    const tasks = await taskModel.find({});
    return tasks;
}

const createTask = async (body) => {

    const task = await taskModel.create(body)
    return task
}

const updateTask = async (id, body) => {
    const task = await taskModel.findByIdAndUpdate(id, body,{
        new: true
      });
    return task;
}

const deleteTask = async (id) => {
    const task = await taskModel.findByIdAndDelete(id);
    return task;
}

module.exports = {
    findTasks,
    createTask,
    updateTask,
    deleteTask
}