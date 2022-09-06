import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderContents } from '../../models/model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

  @Input() contents: HeaderContents | undefined;
  logo!: string | "";
  headerBG:string = "";
  
  constructor(private router: Router) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.headerBG = 'red'
    if(!this.contents?.isInternal) {
      this.logo = this.getIconsPath()+'Yabby_Favicon.svg';
      this.headerBG = this.contents?.styles?.themeheaderColor || ''
    } else {
      this.logo = this.getIconsPath()+'logo.png';
      this.headerBG = '#e8c734';
    }
  }

  ngOnInit(): void {
  }

  getIconsPath() {
    return "./../../../../assets/icons/";
  }

  transactionHistory() {
    this.router.navigate(['account/wallet/history'])
  }

  profile() {
    this.router.navigate(['account/profile'])
  }

  preferences() {
    this.router.navigate(['account/preferences'])
  }
}
