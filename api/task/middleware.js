const db = require('../../data/dbConfig');

const verifyTaskBody = (req, res, next) => {
    if(req.body.task_description === undefined) next({status: 400, message: 'task_description is required'})
    else next();
}

const verifyValidProjectID = async (req, res, next) => {
    try{
        if(req.body.project_id === undefined) next( {status: 400, message: 'project_id is required'})
        else{
            const existing = await db('projects').where('project_id', req.body.project_id).first();
            if(!existing) next({status: 404, message: `project with id of: ${req.body.project_id} not found`})
            else next();
        }
    }
    catch(err) { next(err); }
}

module.exports = {
    verifyTaskBody,
    verifyValidProjectID
};