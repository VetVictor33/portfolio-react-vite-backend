const express = require('express');
const { getAllProjects, getProject } = require('./controllers/projects.controller');
const { getCompEdu } = require('./controllers/compEdu.controller');
const { alive } = require('./controllers/alive.controller');
const router = express();

router.get('/', alive);
router.get('/projects', getAllProjects);
router.get('/projects/:id', getProject);

router.get('/complementary-education', getCompEdu);

module.exports = router;