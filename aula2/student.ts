import { Person } from "./person";

// HERANÇA
export class Student extends Person{

    constructor(name: string){
        super(name);
    }

    // SOBRESCRITA
    public showAge(age: number){
        console.log("Studying ...");
        super.showAge(24);
        
    }
}