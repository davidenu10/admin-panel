import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-static-info',
  templateUrl: './static-info.component.html',
  styleUrls: ['./static-info.component.scss']
})
export class StaticInfoComponent implements OnInit {

  title: string | undefined;
  constructor(public dialogRef: MatDialogRef<StaticInfoComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit(): void {
    if(this.data === 'needHelp') {
      this.title = 'Need help page'
    } else if(this.data === 'terms&condition') {
      this.title = 'Terms and conditions Page'
    }
  }

}
