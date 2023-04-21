const { readAllCompEdu } = require("../database/repository");

const getCompEdu = async (req, res) => {
    try {
        const compEdu = await readAllCompEdu();
        if (!compEdu[0]) return res.status(500).json({ message: "Error when connecting to database", error: compEdu[1].message })
        return res.status(200).json(compEdu);
    } catch (error) {
        return res.status(500).json({ message: error.message })

    }
}

module.exports = {
    getCompEdu,
}