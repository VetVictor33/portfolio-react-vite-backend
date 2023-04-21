const { readFile } = require('fs/promises');

const projectsPath = './src/database/projectsa.json'

const readAllProjects = async () => {
    try {
        const projects = JSON.parse(await readFile(projectsPath, ((data) => data)));
        return projects
    } catch (error) {
        return [undefined, error]
    }
}

module.exports = {
    readAllProjects,
}