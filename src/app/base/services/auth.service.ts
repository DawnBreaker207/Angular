import { ConfigService } from '@/configs/config.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ApiResponse, User } from '../interfaces/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private configService: ConfigService,
  ) {}
  baseUrl = `${this.configService.baseUrl}/auth`;

  Register(inputData: User): Observable<User> {
    return this.http
      .post<ApiResponse<User>>(`${this.baseUrl}/register`, inputData)
      .pipe(
        map((resData) => resData.res),
        catchError((error) => {
          console.log(`Error ${error}`);
          return throwError(() => new Error(`Something went wrong`));
        }),
      );
  }
  Login(inputData: {
    email: string;
    password: string;
  }): Observable<{ user: User; token: string }> {
    return this.http
      .post<ApiResponse<User>>(`${this.baseUrl}/login`, inputData)
      .pipe(
        map((resData) => {
          localStorage.setItem('token', resData.token);

          return {
            user: resData.res,
            token: resData.token,
          };
        }),
        catchError((error) => {
          console.log(`Error ${error}`);
          return throwError(() => new Error(`Something went wrong`));
        }),
      );
  }
  Check_Valid(): boolean {
    let check = false;

    const token: string = localStorage.getItem('token') as string;
    if (token) {
      try {
        const decoded: JwtPayload = jwtDecode<JwtPayload>(token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp! > currentTime) {
          check = true;
        } else {
          console.log(`Token expired`);
          return check;
        }
      } catch (error) {
        console.log(error);
      }
    }
    return check;
  }
}
