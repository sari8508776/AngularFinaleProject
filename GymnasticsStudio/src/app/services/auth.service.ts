import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    private users = [
    { username: 'teacher', password: '100', role: 'teacher' },
    { username: 'secretary', password: '200', role: 'secretary' }
  ];
  constructor() { }

  // פונקציה שבודקת את הלוגין ומחזירה את התפקיד
  checkUser(username: string, password: string): string | null {
    const user = this.users.find(u => u.username === username && u.password === password);
    return user ? user.role : null;
  }
}
