import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PromptComponent } from './prompt/prompt.component';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private matDialog: MatDialog) { }

  openPrompt(){
    return this.matDialog.open(PromptComponent,
      {
        data: {
          title: "",
          message: "Are you sure?"
        },
        width: "300px",
        panelClass: "rounded-popup"
      })
    .afterClosed();
  }
}
