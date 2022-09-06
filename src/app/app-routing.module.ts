import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RootComponent } from './root/root/root.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: "account",
    loadChildren: () => import('./account/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: "admin",
    component: RootComponent,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
