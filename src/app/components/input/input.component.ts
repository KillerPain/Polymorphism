import { Component, OnInit } from '@angular/core';
import { InputService } from 'app/components/input/input.service';

@Component({
  selector: 'pe-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  
  line: String;
  
  constructor(private is:InputService) {}

  ngOnInit() {
    this.is.emptyLine.subscribe((bool: boolean) => {
      if(bool) this.emptyLine();
    });
    this.is.line.subscribe((value: string) => {
      this.line += "" + value;
    });
  }

  emptyLine() {
    this.line = "";
  }

}
