import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _isDarkTheme = false;
  private _isDarkTheme$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this._isDarkTheme);
  coordinateX: string;

  get isDarkTheme$(): Observable<boolean> {
    return this._isDarkTheme$.asObservable();
  }

  constructor() { }

  toggleTheme() {
    this._isDarkTheme = !this._isDarkTheme;
    this._isDarkTheme$.next(this._isDarkTheme);
  }
}
