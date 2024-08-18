import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/books/dashboard/dashboard.component';
import { AddFormComponent } from './components/books/add-form/add-form.component';
import { EditFormComponent } from './components/books/edit-form/edit-form.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add', component: AddFormComponent },
  { path: 'edit/:id', component: EditFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
