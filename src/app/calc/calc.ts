import { IOperation } from "./operation";
import { SumOperation } from "./operations/sum.operation";
import { SubOperation } from "./operations/sub.operation";
import { MulOperation } from "./operations/mul.operation";
import { DivOperation } from "./operations/div.operation";

export class Calculator {
    private operation: IOperation[];

    constructor() {
        this.operation = [
            new SumOperation(),
            new SubOperation(),
            new MulOperation(),
            new DivOperation()
        ];
    }

    execute(_operation: string, params: number[]) {
        const operation = this.operation.find(o => o.operation === _operation);        
        operation.params = params;
        return operation.execute();
    }
}