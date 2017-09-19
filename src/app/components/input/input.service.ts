import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/Rx";
import { Calculator } from 'app/calc/calc';

@Injectable()
export class InputService {
  line = new BehaviorSubject<string>("");
  sign: string = "";
  calc: Calculator;
  num: number = 0;
  numbers: number[] = [];
  emptyLine = new BehaviorSubject<boolean>(true);
  constructor() { 
    this.calc = new Calculator()
  }

  write(value: string) {
    switch (value) {
      case "+":
        this.sign = value;
        break;
      case "-": 
        this.sign = value;
        break;
      case "*": 
        this.sign = value;
        break;
      case "/": 
        this.sign = value;
        break;
      case "=":
        value = this.execute();
        break;
      case "C":
        this.emptyLine.next(true);
        this.numbers = [];
        value = "";
        break;
      default:        
        this.numbers.push(+value);        
        break;
    }
    this.line.next(value);
  }

  execute() :string {
    this.emptyLine.next(true);
    let value = this.calc.execute(this.sign, this.numbers).toString();   
    this.numbers = [];
    this.numbers.push(+value);
    return value;
  }
}
