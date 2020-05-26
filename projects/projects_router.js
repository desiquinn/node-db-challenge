const express = require('express');

const db = require('./projects_model.js');

const router = express.Router();


router.get('/', (req, res) => {
    db.findProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to get projects' });
        });
});

router.post('/', (req, res) => {
    const newProject = req.body;

    db.addProject(newProject)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to add project' });
        });
});

router.get('/resources', (req, res) => {
    db.findResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to get resources' });
        });
});

router.post('/resources', (req, res) => {
    const newResource = req.body;

    db.addResource(newResource)
        .then(resource => {
            res.status(200).json(resource);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to add resource' });
        });
});

router.get('/:id/tasks', (req, res) => {
    const {id} = req.params;
    db.findTasks(id)
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to get tasks' });
        });
});

router.post('/:id/tasks', (req, res) => {
    const newTask = req.body;

    db.addTask(newTask)
        .then(task => {
            res.status(200).json(task);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to add task' });
        });
});

module.exports = router;