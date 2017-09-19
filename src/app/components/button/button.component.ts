import { Component, OnInit, Input } from '@angular/core';
import { InputService } from 'app/components/input/input.service';

@Component({
  selector: 'pe-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() value;
  constructor(private is: InputService) { }

  ngOnInit() {
  }

  onClick() {
    this.is.write(this.value);
  }
}
