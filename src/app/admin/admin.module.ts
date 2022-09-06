import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion'
import { WalletsComponent } from './wallets/wallets.component';
import { URLsComponent } from './urls/urls.component';
import { ApisComponent } from './apis/apis.component';
import { ReportsComponent } from './reports/reports.component';
import { PayComponent } from './pay/pay.component';
import { LedgersComponent } from './ledgers/ledgers.component';
import { EmailSettingsComponent } from './email-settings/email-settings.component';



@NgModule({
  declarations: [
    WalletsComponent,
    URLsComponent,
    ApisComponent,
    ReportsComponent,
    PayComponent,
    LedgersComponent,
    EmailSettingsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatSidenavModule,
    MatExpansionModule
  ]
})
export class AdminModule { }
