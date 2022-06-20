const Task = require('../model/task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../Error/custom_error');

/* All Documents Retrieval */
const getAllTasks = asyncWrapper(async (req, res) => {
	const tasks = await Task.find({});
	res.status(200).json({ tasks });
});

/* Single Document Creation */
const createTask = asyncWrapper(async (req, res, next) => {
	await Task.create(req.body);
	res.status(200).send(req.body);
});

/* Single Document Retrieval */
const getTask = asyncWrapper(async (req, res, next) => {
	const { id: taskID } = req.params;
	const task = await Task.findOne({ _id: taskID });

  if (!task)
    return next(createCustomError(`No Task with taskID : ${taskID}`));

	res.status(200).json({ task });
});

/* Single Document Deletion */
const deleteTask = asyncWrapper(async (req, res, next) => {
	const { id: taskID } = req.params;
	const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task)
    return next(createCustomError(`No Task with taskID : ${taskID}`));

	res.status(200).json({ task });
});

/* Single Document Updation */
const updateTask = asyncWrapper(async (req, res, next) => {
	const { id: taskID } = req.params;

	const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
		new: true,
		runValidators: true
	});
  if (!task)
    return next(createCustomError(`No Task with taskID : ${taskID}`));
	
  res.status(200).json({ task });
});

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };



/* 

---  Functions import
---  Create New Document
---  Fetching All Documents
---  Fetching Single Document
---  Updating Single Document
---  Deleting Single Document


*/