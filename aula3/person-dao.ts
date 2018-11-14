import { Interface } from "./interface";
import { Person } from "../aula2/person";

export class PersonDAO implements Interface {
    
    tableName: string;

    insert(person: Person): boolean {
        console.log('inserting ...');
        
        return true;
    }

    update(person: Person): boolean {
        console.log('updating ...');
        return true;
    }

    delete(id: number): boolean {
        console.log('deleting ...');
        return true;
    }

    findById(id: number): Person {
        console.log('findById ...');
        return null;
    }

    findAll(): [Person] {
        console.log('finding ...');
        return [new Person('Tereza')];
    }

    
}