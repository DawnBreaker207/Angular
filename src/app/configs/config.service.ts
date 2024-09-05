import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  // Initial BehaviorSubject with env variable
  private baseUrlSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    environment.apiUrl,
  );

  // Get URL
  public get baseUrl(): string {
    return this.baseUrlSubject.getValue();
  }
  // Update URL
  public setBaseUrl(url: string): void {
    this.baseUrlSubject.next(url);
  }
}
