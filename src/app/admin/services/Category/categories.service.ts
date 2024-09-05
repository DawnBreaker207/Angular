import { ApiResponse, Category } from '@/base/interfaces/common';
import { ConfigService } from '@/configs/config.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(
    private http: HttpClient,
    private configService: ConfigService,
  ) {}

  baseUrl = this.configService.baseUrl;
  private fullUrl = `${this.baseUrl}/categories`;

  LoadAll(): Observable<Category[]> {
    return this.http.get<ApiResponse<Category[]>>(`${this.fullUrl}`).pipe(
      map(
        (resData) => resData.res,
        catchError((error) => {
          console.log(`Error ${error}`);
          return throwError(() => new Error('Something went wrong'));
        }),
      ),
    );
  }
  LoadOne(id: string): Observable<Category> {
    return this.http.get<ApiResponse<Category>>(`${this.fullUrl}/${id}`).pipe(
      map((resData) => resData.res),
      catchError((error) => {
        console.log(`Error ${error}`);
        return throwError(() => new Error('Something went wrong'));
      }),
    );
  }
  Create(inputData: Category): Observable<Category> {
    return this.http
      .post<ApiResponse<Category>>(`${this.fullUrl}`, inputData)
      .pipe(
        map(
          (resData) => resData.res,
          catchError((error) => {
            console.log(`Error ${error}`);
            return throwError(() => new Error('Something went wrong'));
          }),
        ),
      );
  }
  Update(inputData: Category): Observable<Category> {
    return this.http
      .put<ApiResponse<Category>>(`${this.fullUrl}/${inputData._id}`, inputData)
      .pipe(
        map(
          (resData) => resData.res,
          catchError((error) => {
            console.log(`Error ${error}`);
            return throwError(() => new Error('Something went wrong'));
          }),
        ),
      );
  }
  Delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.fullUrl}/${id}`).pipe(
      catchError((error) => {
        console.log(`Error ${error}`);
        return throwError(() => new Error('Something went wrong'));
      }),
    );
  }
}
