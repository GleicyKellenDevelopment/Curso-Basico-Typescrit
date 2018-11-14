import { Interface } from "./interface";

export class Dao<T> implements Interface<T> {
    
    tableName: string;

    insert(object: T): boolean {
        console.log('inserting ...');
        return true;
    }

    update(object: T): boolean {
        console.log('updating ...');
        return true;
    }

    delete(id: number): boolean {
        console.log('deleting ...');
        return true;
    }

    findById(id: number): T {
        console.log('findById ...');
        return null;
    }

    findAll(): [T] {
        console.log('finding ...');
        return [null];
    }
}