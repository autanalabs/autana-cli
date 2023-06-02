
const {
    createProject, listProjects, projectAttributes, removeProject,
    updateProject, findProjectByName

} = require('./repositories/projects');

const { findRuleByCommandAndPath, listRules, 
    ruletAttributes } = require('./repositories/rules');


module.exports = {
    createProject, listProjects, projectAttributes, 
    removeProject, updateProject, findProjectByName,
    findRuleByCommandAndPath, listRules, 
    ruletAttributes,

};