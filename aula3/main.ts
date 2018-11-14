import { PersonDAO } from "./person-dao";
import { Person } from "../aula2/person";

let persoaDAO: PersonDAO = new PersonDAO();

let person: Person = new Person('Teresa');

persoaDAO.insert(person)