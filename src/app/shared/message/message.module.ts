import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PromptComponent } from './prompt/prompt.component';
import { MessageService } from './message.service';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    PromptComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [
    MessageService
  ]
})
export class MessageModule { }
