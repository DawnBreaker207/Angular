import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-client',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout-client.component.html',
  styleUrl: './layout-client.component.css',
})
export class LayoutClientComponent {}
