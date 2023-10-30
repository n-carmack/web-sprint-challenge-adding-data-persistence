const express = require('express');

const ProjectRouter = require('./project/router');

const ResourceRouter = require('./resource/router');

const TaskRouter = require('./task/router');

const server = express();


server.use(express.json());
server.use('/api/resources', ResourceRouter);
server.use('/api/projects', ProjectRouter);
server.use('/api/tasks', TaskRouter) ;
server.use('*', (req, res) => {
    res.json('Not found!');
})

module.exports = server;