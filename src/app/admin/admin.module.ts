import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';

import { BooksService } from './services/books.service';
import { FormComponent } from './components/common/form/form.component';
import { ButtonComponent } from './components/common/button/button.component';
import { InputComponent } from './components/common/input/input.component';
import { TableComponent } from './components/common/table/table.component';
import { TableItemComponent } from './components/common/table-item/table-item.component';
import { DashboardComponent } from './components/books/dashboard/dashboard.component';
import { AddFormComponent } from './components/books/add-form/add-form.component';
import { EditFormComponent } from './components/books/edit-form/edit-form.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddFormComponent,
    EditFormComponent,
    FormComponent,
    ButtonComponent,
    InputComponent,
    TableComponent,
    TableItemComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [BooksService],
})
export class AdminModule {}
