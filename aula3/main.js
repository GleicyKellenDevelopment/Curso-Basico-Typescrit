"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_dao_1 = require("./person-dao");
var person_1 = require("../aula2/person");
var persoaDAO = new person_dao_1.PersonDAO();
var person = new person_1.Person('Teresa');
persoaDAO.insert(person);
//# sourceMappingURL=main.js.map