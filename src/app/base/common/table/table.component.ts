import { TableItem } from '@/base/interfaces/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { dataHeader } from '../../../assets/mock/mock-table';

@Component({
  selector: 'app-admin-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent<T extends TableItem> {
  @Input() headerTable!: dataHeader[];
  @Input() currentPage: number = 1;
  @Input() itemPerPage: number = 5;
  @Input() totalItems: number = 0;
  @Input() totalPages: number = 0;
  @Input() paginates$: BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  @Input() editPath: string = '';
  @Output() PageChange: EventEmitter<number> = new EventEmitter<number>();

  @Output() Delete: EventEmitter<string> = new EventEmitter<string>();

  objectKeys = Object.keys as <U>(obj: U) => Array<keyof U>;
  handleDelete(itemId?: string) {
    this.Delete.emit(itemId);
  }
  pageChange(page: number) {
    this.PageChange.emit(page);
  }
}
