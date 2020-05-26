const db = require('../data/config.js');

module.exports = {
    findProjects,
    addProject,
    findResources,
    addResource,
    findTasks,
    addTask
}

function findProjects() {
    return db('projects');
// completed true or false not 1 or 0
}

//stretch: find Project by Id (see ReadMe for Return structure)

function addProject(project) {
    return db('projects')
        .insert(project)
}

function findResources() {
    return db('resources');
}

function addResource(resource) {
    return db('resources')
        .insert(resource)
}

function findTasks(id) {
    return db('tasks')
        .select([
            'tasks.id',
            'projects.name AS project_name',
            'projects.description',
            'tasks.description AS task',
            'tasks.notes',
            'tasks.completed'
        ])
        .join('projects', 'projects.id', 'tasks.project_id')
        .where({project_id: id})
// completed true or false not 1 or 0
}

function addTask(task) {
    return db('tasks')
        .insert(task)
}