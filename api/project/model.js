// build your `Project` model here
const db = require('../../data/dbConfig')


async function create(project){
    const id = await db('projects').insert(project);

    const result = await db('projects').where('project_id', id).first();
    console.log(result.project_completed);
    return result;
}


async function get(){
    const projects = await db('projects')
    .select('project_id', 'project_name', 'project_description', 'project_completed');

    projects.map(project => {
        project.project_completed === 1 ? project.project_completed = true : project.project_completed = false;
    })

    return projects;
}


module.exports = {
    create,
    get
}