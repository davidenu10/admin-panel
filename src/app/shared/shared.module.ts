import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { SteppedStatusComponent } from './components/stepped-status/stepped-status.component';

import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';
import { StaticInfoComponent } from './components/static-info/static-info.component';
import { MessageModule } from './message/message.module';

@NgModule({
  declarations: [
    SteppedStatusComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    StaticInfoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    MessageModule
  ],
  exports: [
    MaterialModule,
    SteppedStatusComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    MessageModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule
    };
  }
 }
