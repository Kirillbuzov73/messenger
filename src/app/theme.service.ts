import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _isDarkTheme = false;
  private _isDarkTheme$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this._isDarkTheme);
  coordinateX: string;
  minimize = {
    isMinimizeStatus: false
  };

  get isDarkTheme$(): Observable<boolean> {
    return this._isDarkTheme$.asObservable();
  }

  constructor() { }

  toggleTheme() {
    this._isDarkTheme = !this._isDarkTheme;
    this._isDarkTheme$.next(this._isDarkTheme);
  }

  handleDragEvent(event: MouseEvent) {
    if (event.clientX % 5 === 0 && event.clientX > 62) {
      this.minimize.isMinimizeStatus = false;
      this.coordinateX = event.clientX.toString();
    } else if (event.clientX && event.clientX <= 62) {
      this.minimize.isMinimizeStatus = true;
    }
  }
}
