import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  getUsers() {
    return this.get<User[]>("assets/users.json");
  }
}

export interface User {
  name: string;
  text: string;
  date: Date | string;
  pic: string;
}