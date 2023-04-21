const { readAllProjects } = require("../database/repository");


const getAllProjects = async (req, res) => {
    try {
        const projects = await readAllProjects();
        if (!projects[0]) return res.status(500).json({ message: "Error when connecting to database" })
        return res.status(200).json(projects);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getProject = async (req, res) => {

}

module.exports = {
    getAllProjects
}