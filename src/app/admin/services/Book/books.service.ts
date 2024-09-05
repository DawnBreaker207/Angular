import { ApiResponse, Book } from '@/base/interfaces/common';
import { ConfigService } from '@/configs/config.service';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(
    private http: HttpClient,
    private configService: ConfigService,
  ) {}
  baseUrl = this.configService.baseUrl;
  private fullUrl = `${this.baseUrl}/books`;
  getAll(): Observable<Book[]> {
    return this.http.get<ApiResponse<Book[]>>(`${this.fullUrl}`).pipe(
      map((resData) => resData.res),
      catchError((error) => {
        console.log(`Error ${error}`);
        return throwError(() => new Error('Something went wrong'));
      }),
    );
  }
  getOne(id: string): Observable<Book> {
    return this.http.get<ApiResponse<Book>>(`${this.fullUrl}/${id}`).pipe(
      map((resData) => resData.res),
      catchError((error) => {
        console.log(`Error ${error}`);
        return throwError(() => new Error('Something went wrong'));
      }),
    );
  }
  create(inputData: Book): Observable<Book> {
    return this.http.post<ApiResponse<Book>>(`${this.fullUrl}`, inputData).pipe(
      map((resData) => resData.res),
      catchError((error) => {
        console.log(`Error ${error}`);
        return throwError(() => new Error('Something went wrong'));
      }),
    );
  }
  update(inputData: Book): Observable<Book> {
    return this.http
      .put<ApiResponse<Book>>(`${this.fullUrl}/${inputData._id}`, inputData)
      .pipe(
        map((resData) => resData.res),
        catchError((error) => {
          console.log(`Error ${error}`);
          return throwError(() => new Error('Something went wrong'));
        }),
      );
  }
  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.fullUrl}/${id}`).pipe(
      catchError((error) => {
        console.log(`Error ${error}`);
        return throwError(() => new Error('Something went wrong'));
      }),
    );
  }
}
