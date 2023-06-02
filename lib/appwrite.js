
const {
    createProject, listProjects, projectAttributes, removeProject,
    updateProject, findProjectByName

} = require('./repositories/projects');

const rules = require('./repositories/rules');

module.exports = {
    createProject, listProjects, projectAttributes, removeProject,
    updateProject, findProjectByName

};