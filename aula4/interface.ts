export interface Interface<T> {
    
    tableName: string;

    insert(object: T): boolean;
    update(object: any): boolean;
    delete(id: number): boolean;

    findById(id: number): T;
    findAll(): [T];
}