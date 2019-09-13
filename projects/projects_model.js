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

function findTasks() {
    return db('tasks')
        .select([
            'tasks.id',
            'projects.name',
            'projects.description',
            'tasks.description',
            'tasks.notes',
            'tasks.completed'
        ])
        .join('projects', 'projects.id', 'tasks.project_id')
// project name and project description
// completed true or false not 1 or 0
}

function addTask(task) {
    return db('tasks')
        .insert(task)
}