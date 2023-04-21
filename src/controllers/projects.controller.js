const { readAllProjects, readSingleProject } = require("../database/repository");

const getAllProjects = async (req, res) => {
    try {
        const projects = await readAllProjects();
        if (!projects[0]) return res.status(500).json({ message: "Error when connecting to database", error: projects[1].message })
        return res.status(200).json(projects);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getProject = async (req, res) => {
    const { id } = req.params;
    if (isNaN(+id)) return res.status(400).json({ messagem: "id must be a number" })
    try {
        const project = await readSingleProject(+id);
        if (!project) return res.status(404).json({ message: `There is no project with id ${id}` })
        return res.status(200).json(project)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllProjects,
    getProject
}