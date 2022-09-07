import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss']
})
export class PromptComponent implements OnInit {

  title: string = "";
  message: string = "";

  actions: any[] = [
    {
      label: "Sure",
      icon: "add",
      result: true,
      color: "primary"
    },
    {
      label: "Cancel",
      icon: "close",
      result: false,
      color: "primary"
    }
  ]
  constructor(private matDialog: MatDialogRef<PromptComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.title = data?.title;
    this.message = data?.message;
  }

  ngOnInit(): void {
  }

  onClickAction(action: any) {
    this.matDialog.close(action.result);
  }

}
