import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatStepper } from '@angular/material/stepper';
import { StepState, STEP_STATE } from "@angular/cdk/stepper";

export interface Step {
  index?: number;
  label: string,
  completed?: boolean,
  hasError?: boolean,
  state?: StepState,
  color?: ThemePalette,
  loading?: boolean
}
@Component({
  selector: 'app-stepped-status',
  templateUrl: './stepped-status.component.html',
  styleUrls: ['./stepped-status.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SteppedStatusComponent implements OnInit {
  @Input() steps: Step[] | null = [];
  @ViewChild('stepper') stepper!: MatStepper;
  constructor() { }

  ngOnInit(): void {
  }

  isLastStep(i: number) {
    setTimeout(() => {
      if(i === this.steps?.length) {
        setTimeout(() => {
          window.location.replace("http://www.google.com");  
        }, 8000);
      }
    }, 2000);
  }

}
