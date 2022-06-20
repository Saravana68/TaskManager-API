const Task = require('../model/task');
const asyncWrapper = require('../middleware/async');

/* All Documents retrieval */
const getAllTasks = asyncWrapper(async (req, res, next) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
})

/* new Doc creation */
const createTask = asyncWrapper(async (req, res, next) => {
    await Task.create(req.body );
    res.status(200).status(req.body );
})

/* single Document retrieval */
const getTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    res.status(200).json({ task });
})

/* single Document updation */
const updateTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true
    })
    res.status(200).json({ task });
})

/* Single document Delete */
const deleteTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    res.status(200).json({ task });
})
 

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
};



/*
20.06.2022 | Monday
TIME : 03.49pm
 */
