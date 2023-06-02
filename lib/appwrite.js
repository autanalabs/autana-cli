
const {
    createProject, listProjects, projectAttributes, removeProject,
    updateProject, findProjectByName

} = require('./repositories/projects');

const { findRuleByCommandAndPath, listRules, 
    ruletAttributes, createRule, updateRule, deleteRule
} = require('./repositories/rules');


module.exports = {
    createProject, listProjects, projectAttributes, 
    removeProject, updateProject, findProjectByName,
    findRuleByCommandAndPath, listRules, 
    ruletAttributes, createRule, updateRule, deleteRule

};