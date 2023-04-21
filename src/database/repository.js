const { readFile } = require('fs/promises');

const projectsPath = './src/database/projects.json';
const compEduPath = './src/database/compEdu.json';

const readAllProjects = async () => {
    try {
        const projects = JSON.parse(await readFile(projectsPath, ((data) => data)));
        return projects
    } catch (error) {
        return [undefined, error]
    }
}

const readSingleProject = async (id) => {
    try {
        const projects = await readAllProjects();
        const project = projects.find(project => project.id === +id);
        return project
    } catch (error) {
        return [undefined, error]
    }
}

const readAllCompEdu = async () => {
    try {
        const compEdu = JSON.parse(await readFile(compEduPath, ((data) => data)));
        return compEdu
    } catch (error) {
        return [undefined, error]
    }
}

module.exports = {
    readAllProjects,
    readSingleProject,
    readAllCompEdu
}