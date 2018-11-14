import { Interface } from "./interface";
import { Person } from "../aula2/person";
import { Dao } from "./dao";

let dao: Interface<Person> = new Dao<Person>();
let person: Person = new Person('Joao');

dao.insert(person);
