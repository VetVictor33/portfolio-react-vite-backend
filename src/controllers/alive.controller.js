
const alive = (req, res) => {
    return res.status(200).json({ projectsEndpoint: '/projects/:id', complementaryEducationEndpoint: '/complementary-education' })
}

module.exports = {
    alive
}