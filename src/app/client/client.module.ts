import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ListBookComponent } from './pages/list-book/list-book.component';
import { LayoutComponent } from './layout/layout.component';
import { CardBookComponent } from './components/common/card-book/card-book.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListBookComponent,
    LayoutComponent,
    CardBookComponent,
  ],
  imports: [CommonModule, ClientRoutingModule],
})
export class ClientModule {}
