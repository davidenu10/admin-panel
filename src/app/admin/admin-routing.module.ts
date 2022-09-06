import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApisComponent } from './apis/apis.component';
import { EmailSettingsComponent } from './email-settings/email-settings.component';
import { LedgersComponent } from './ledgers/ledgers.component';
import { PayComponent } from './pay/pay.component';
import { ReportsComponent } from './reports/reports.component';
import { URLsComponent } from './urls/urls.component';
import { WalletsComponent } from './wallets/wallets.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "apis",
        component: ApisComponent
      },
      {
        path: "email-settings",
        component: EmailSettingsComponent
      },
      {
        path: "ledgers",
        component: LedgersComponent
      },
      {
        path: "pay",
        component: PayComponent
      },
      {
        path: "reports",
        component: ReportsComponent
      },
      {
        path: "urls",
        component: URLsComponent
      },
      {
        path: "wallets",
        component: WalletsComponent
      },
      {
        path: "**",
        pathMatch: "full",
        redirectTo: "apis"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
