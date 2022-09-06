import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailVerifyComponent } from './email-verify/email-verify.component';
import { InitiateComponent } from './initiate/initiate.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "prefix",
    children: [
      {
        path: "initiate",
        component: InitiateComponent
      },
      {
        path: "verify",
        component: EmailVerifyComponent
      },
      {
        path: "thanks",
        component: ThankYouComponent
      },
      {
        path: "**",
        redirectTo: "initiate",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
