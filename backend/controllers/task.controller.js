const {findTasks, createTask, updateTask, deleteTask} = require('../services/task.service')

const getTask = async (req,res) => {
    try{
        const tasks = await findTasks()
        res.status(200).send(tasks)
    }catch (e){
        res.status(500).json({error: e})
    }
}

const newTask = async (req,res) => {
    try{
    
       const {title, description, status, deadline } = req.body;
       const linkedFile = req.file ? {data: req.file.buffer, contentType: req.file.mimetype} : null;
   
       const task = await createTask({title, description, status, deadline,linkedFile });
       res.status(201).send(task);
    }catch (e){
        res.status(500).json({error: e})
    }
}

const editTask = async (req,res) => {
   
    try{
        const {id} = req.params;
        const body = req.body;
        const task = await updateTask(id,body);
        res.status(200).send(task)
    }catch (e){
        res.status(500).json({error: e})
    }
}

const deletetask = async (req,res) => {
    try{
       const {id} = req.params;
       const task = await deleteTask(id)
       res.status(200).send(task)
    }catch (e){
        res.status(500).json({error: e})
    }
}

module.exports = {getTask,newTask, editTask, deletetask}