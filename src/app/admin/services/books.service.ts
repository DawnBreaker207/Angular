import { HttpClient } from '@angular/common/http';
import { Injectable, input } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from '../state/book.model';

interface ApiResponse {
  res: Book[];
}
@Injectable({
  providedIn: 'root',
})
export class BooksService {
  URL: string = 'http://localhost:8888/api/v1/books';
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http
      .get<ApiResponse>(`${this.URL}`)
      .pipe(map((resData) => resData.res));
  }
  getOne(id: string): Observable<any> {
    return this.http
      .get<ApiResponse>(`${this.URL}/${id}`)
      .pipe(map((resData) => resData.res));
  }
  create(inputData: Book): Observable<any> {
    return this.http.post(`${this.URL}`, inputData);
  }
  update(inputData: Book): Observable<any> {
    return this.http.put(`${this.URL}/${inputData._id}`, inputData);
  }
  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.URL}/${id}`);
  }
}
