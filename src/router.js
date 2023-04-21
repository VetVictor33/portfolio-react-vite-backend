const express = require('express');
const { getAllProjects } = require('./controllers/projects.controller');
const router = express();

router.get('/projects', getAllProjects)

module.exports = router;