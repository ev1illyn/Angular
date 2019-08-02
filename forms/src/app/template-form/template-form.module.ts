import { FormDebugComponent } from './../form-debug/form-debug.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { CampoControlErroComponent } from '../campo-control-erro/campo-control-erro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    ],
  declarations: [
    TemplateFormComponent,
    FormDebugComponent,
    CampoControlErroComponent
    ]
})
export class TemplateFormModule { }
