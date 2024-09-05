import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './common/button/button.component';
import { FormComponent } from './common/form/form.component';
import { InputComponent } from './common/input/input.component';

import { TableComponent } from './common/table/table.component';

@NgModule({
  declarations: [
    FormComponent,
    ButtonComponent,
    InputComponent,
    TableComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  exports: [FormComponent, ButtonComponent, InputComponent, TableComponent],
})
export class BaseModule {}
