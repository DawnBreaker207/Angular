import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClientRoutingModule } from './client-routing.module';
import { CardBookComponent } from './components/common/card-book/card-book.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HeaderComponent } from './components/common/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ListBookComponent } from './pages/list-book/list-book.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BaseModule } from '@/base/base.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListBookComponent,
    LayoutComponent,
    CardBookComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [CommonModule, ClientRoutingModule, BaseModule],
})
export class ClientModule {}
