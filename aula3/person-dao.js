"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("../aula2/person");
var PersonDAO = (function () {
    function PersonDAO() {
    }
    PersonDAO.prototype.insert = function (person) {
        console.log('inserting ...');
        return true;
    };
    PersonDAO.prototype.update = function (person) {
        console.log('updating ...');
        return true;
    };
    PersonDAO.prototype.delete = function (id) {
        console.log('deleting ...');
        return true;
    };
    PersonDAO.prototype.findById = function (id) {
        console.log('findById ...');
        return null;
    };
    PersonDAO.prototype.findAll = function () {
        console.log('finding ...');
        return [new person_1.Person('Tereza')];
    };
    return PersonDAO;
}());
exports.PersonDAO = PersonDAO;
//# sourceMappingURL=person-dao.js.map