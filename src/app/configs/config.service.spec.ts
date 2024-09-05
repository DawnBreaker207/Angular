import { TestBed } from '@angular/core/testing';
import { ConfigService } from './config.service';

describe('ConfigServiceService', () => {
  let service: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigService],
    });
    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return initial baseUrl from BehaviorSubject', () => {
    const expectedUrl = 'http://localhost:8888/api/v1';
    expect(service.baseUrl).toBe(expectedUrl);
  });

  it('Should update baseUrl when setBaseUrl is called', () => {
    const newUrl = 'http://localhost:8888/api/v1/books';
    service.setBaseUrl(newUrl);
    expect(service.baseUrl).toBe(newUrl);
  });
});
