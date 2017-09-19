import { IOperation } from "../operation";

export class SumOperation implements IOperation {
    params: number[];
    operation: string;
    
    constructor() {
        this.operation = '+';
        this.params = [];
    }

    execute() {
        if (this.params.length <= 1) {
            throw new Error("Need More Values");
        }
        let sum = 0;
        for (const param of this.params) {
            sum += param;
        }
        this.params = [];
        return sum;
    }

}