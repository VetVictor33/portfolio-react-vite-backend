const express = require('express');
const { getAllProjects, getProject } = require('./controllers/projects.controller');
const router = express();

router.get('/projects', getAllProjects);
router.get('/projects/:id', getProject);

module.exports = router;