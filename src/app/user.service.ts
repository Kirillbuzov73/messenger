import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private variable: number = 0;
  private variable$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) { }

  addOne(): void {
    this.variable++;
    this.variable$.next(this.variable);
  }

  subOne(): void {
    this.variable--;
    this.variable$.next(this.variable);
  }

  getVariable(): number {
    return this.variable;
  }

  getVariable$(): Observable<number> {
    return this.variable$.asObservable();
  }

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