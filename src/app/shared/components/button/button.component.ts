import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ButtonContents } from '../../models/model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @ViewChild('buttonEl') buttonEl:ElementRef | undefined;
  @Input() buttonInputs: ButtonContents = {
    label: '',
    bgColor: '',
    color: ''
  };

  @Input() isDisabled!: boolean;

  @Output() clickEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clickEvent.emit(true);
  }
}
