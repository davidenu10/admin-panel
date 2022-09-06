import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RootComponent } from './root/root/root.component';
import { NavService } from './services/nav.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
