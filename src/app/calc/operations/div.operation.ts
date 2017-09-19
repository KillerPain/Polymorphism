import { IOperation } from "../operation";

export class DivOperation implements IOperation {
    params: number[];
    operation: string;
    
    constructor() {
        this.operation = '/';
        this.params = [];
    }

    execute() {
        if (this.params.length <= 1) {
            throw new Error("Need More Values");
        }
        let div = this.params[0];
        for (let i = 1; i < this.params.length; i++) {            
            div /= this.params[i];
        }
        this.params = [];
        return div;
    }

}