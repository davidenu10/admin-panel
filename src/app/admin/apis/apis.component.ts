import { Component, OnInit } from '@angular/core';

export interface APIs {
  apis: string;
  name?: string;
  icon?: string;
  apikey: string;
}

const apiKeys: APIs[] = [
  { apis: "tatum", icon: "../../../assets/svgs/apis/tatum.svg", name: "TATUM", apikey: 'API_KEY' },
  { apis: "blockchair", icon: "../../../assets/svgs/apis/blockchair.svg", name: "BLOCKCHAIR", apikey: 'API_KEY' },
  { apis: "blockcypher", icon: "../../../assets/svgs/apis/blockcypher.svg", apikey: 'API_KEY' },
  { apis: "coinmarketcap", icon: "../../../assets/svgs/apis/coinmarketcap.svg", apikey: 'API_KEY' },
  { apis: "changelly", icon: "../../../assets/svgs/apis/changelly.svg", apikey: 'API_KEY' },
];

@Component({
  selector: 'app-apis',
  templateUrl: './apis.component.html',
  styleUrls: ['./apis.component.scss']
})
export class ApisComponent implements OnInit {


  displayedColumns: string[] = ['apis', 'apikey'];
  dataSource = apiKeys;
  constructor() { }

  ngOnInit(): void {
  }

}
