import { IOperation } from "../operation";

export class MulOperation implements IOperation {
    params: number[];
    operation: string;
    
    constructor() {
        this.operation = '*';
        this.params = [];
    }

    execute() {
        if (this.params.length <= 1) {
            throw new Error("Need More Values");
        }
        let mul = 1;
        for (const param of this.params) {
            mul *= param;
        }
        this.params = [];
        return mul;
    }

}