const verifyProjectBody = (req, res, next) => {
    if(req.body.project_name === undefined) next({status: 400, message: 'project_name is required'})
    else next();
}

module.exports = {
    verifyProjectBody
};