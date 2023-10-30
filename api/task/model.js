const db = require('../../data/dbConfig')


async function create(task){
    const id = await db('tasks').insert(task);
    const result = await db('tasks').where('task_id', id).first();
    return result;
}
 

function get(){
    return db('tasks as t')
        .leftJoin('projects as p','t.project_id','p.project_id')
        .select('task_id',
        'task_notes',
        'task_description',
        'task_completed',
        'p.project_name',
        'p.project_description');
}


module.exports = {
    create,
    get
}