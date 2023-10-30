const db = require('../../data/dbConfig')


async function create(resource){
    const id = await db('resources').insert(resource);
    const result = await db('resources').where('resource_id', id).first();
    return {resource_name: result.resource_name};
}


function get(){
    return db('resources');
}


module.exports = {
    create,
    get
}