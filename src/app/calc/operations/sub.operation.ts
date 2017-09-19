import { IOperation } from "../operation";

export class SubOperation implements IOperation {
    params: number[];
    operation: string;
    
    constructor() {
        this.operation = '-';
        this.params = [];
    }

    execute() {
        if (this.params.length <= 1) {
            throw new Error("Need More Values");
        }
        let sub = this.params[0];
        for (let i = 1; i < this.params.length; i++) {            
            sub -= this.params[i];
        }
        this.params = [];
        return sub;
    }

}