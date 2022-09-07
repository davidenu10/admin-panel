import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/shared/message/message.service';


const ELEMENT_DATA: any[] = [
  {wallet: 1, address: 'Hydrogen', balance: 1.0079, status: 'H', swapInWallet: ''},
];

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.scss']
})
export class WalletsComponent implements OnInit {
  panelOpenState: boolean = false;
  
  displayedColumns: string[] = ['wallet', 'address', 'balance', 'status', 'swapInWallet', 'action'];
  dataSource = ELEMENT_DATA;
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onClickAddWallet(){
    this.messageService.openPrompt()
    .subscribe(result => {
      if(result){

      } else {
        
      }
    })
  }

}
