import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'admin-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() type: 'submit' | 'button' = 'button';
  @Output() click: EventEmitter<void> = new EventEmitter<void>();

  onClick() {
    this.click.emit();
  }
}
