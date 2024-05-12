import { Component } from '@angular/core';
import { HeaderAdminComponent } from '../../header-admin/header-admin.component';
import { SidebarAdminComponent } from '../../sidebar-admin/sidebar-admin.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-admin',
  standalone: true,
  imports: [HeaderAdminComponent, SidebarAdminComponent, RouterOutlet],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.css',
})
export class LayoutAdminComponent {}
