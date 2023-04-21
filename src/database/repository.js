const { readFile } = require('fs/promises');

const projectsPath = './src/database/projects.json'

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

module.exports = {
    readAllProjects,
    readSingleProject
}