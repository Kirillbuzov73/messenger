import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput, of } from 'rxjs';
import { User } from './users.interfaces';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  // getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>('assets/users.json')
  //     .pipe(
  //       catchError(err => {
  //         console.error(err);
  //         if (err.status === 404) {
  //           alert(404);
  //         }
  //         return of([]);
  //       })
  //     );
  // }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/api/users')
      .pipe(
        catchError(err => {
          console.error(err);
          if (err.status === 404) {
            alert(404);
          }
          return of([]);
        })
      );
  }

  postData(user: User): Observable<any> {
    return this.http.post('http://localhost:3000/api/postusers', user);
  }
}
