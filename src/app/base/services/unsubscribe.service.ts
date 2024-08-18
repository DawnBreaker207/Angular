import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UnsubscribeService implements OnDestroy {
  private destroyed$: Subject<void> = new Subject<void>();

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }
  public unsubscribeAll(): void {
    // Send request to unsubscribe all subscriptions
    this.destroyed$.next();
    // Complete Subject
    this.destroyed$.complete();
  }
}
