import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnsubscribeService } from './services/unsubscribe.service';

@Component({
  template: '',
})
export class BaseComponent implements OnInit, OnDestroy {
  protected paramValue: string | null = null;
  constructor(
    protected route: ActivatedRoute,
    protected unsubscribeService: UnsubscribeService
  ) {}
  ngOnInit(): void {
    this.paramValue = this.getValueFromParam('id');
  }
  ngOnDestroy(): void {
    this.unsubscribeService.unsubscribeAll();
  }

  protected getValueFromParam(paramName: string): string | null {
    return this.route.snapshot.paramMap.get(paramName);
  }
}
