const express = require('express');

const Tasks = require('./model');

const { verifyValidProjectID, verifyTaskBody } = require('./middleware');

const router = express.Router();


router.post('/', verifyValidProjectID, verifyTaskBody, (req, res, next) => {
    Tasks.create(req.body)
    .then(newTask => {
        newTask.task_completed === 1 ? newTask.task_completed = true : newTask.task_completed = false;
        res.status(201).json(newTask);
    })
    .catch(next);
})


router.get('/', (req, res, next) => {
    Tasks.get()
    .then(tasks => {
        tasks.map(task => {
            task.task_completed === 1 ? task.task_completed = true : task.task_completed = false;
        })
        res.status(201).json(tasks);
    })
    .catch(next);
})


router.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})


module.exports = router;