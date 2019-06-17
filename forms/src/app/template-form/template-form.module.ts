import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { FormDebugModule } from '../form-debug/form-debug.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormDebugModule
    ],
  declarations: [
    TemplateFormComponent,
    ]
})
export class TemplateFormModule { }
