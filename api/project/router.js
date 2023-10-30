// build your `/api/projects` router here

const express = require('express');
const Projects = require('./model');
const { verifyProjectBody } = require('./middleware');

const router = express.Router();


router.post('/', verifyProjectBody, (req, res, next) => {
    Projects.create(req.body)
        .then(newPost => {
            newPost.project_completed === 0 ? newPost.project_completed = false : newPost.project_completed = true;
            res.status(201).json(newPost);
        })
        .catch(next);

})

router.get('/', (req, res, next) => {
    Projects.get()
        .then(projects => {
            res.status(201).json(projects);
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