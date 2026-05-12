import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class LessonService {
  private lessons = [
    {
      name: 'פילאטיס מכשירים',
      teacher: 'שרה כהן',
      sessions: 12,
      startDate: new Date('2026-06-01'),
      price: 600,
      day: 'ב',
      hour: '17:00'
    },
    {
      name: 'זומבה',
      teacher: 'רבקה לוי',
      sessions: 8,
      startDate: new Date('2027-05-10'),
      price: 450,
      day: 'ד',
      hour: '19:30'
    },
    {
      name: 'יוגה ויניאסה',
      teacher: 'נועה דיין',
      sessions: 10,
      startDate: new Date('2026-06-15'),
      price: 550,
      day: 'א',
      hour: '08:30'
    },
    {
      name: 'קיקבוקסינג',
      teacher: 'מיה ברק',
      sessions: 15,
      startDate: new Date('2024-04-20'),
      price: 700,
      day: 'ה',
      hour: '20:00'
    },
    {
      name: 'עיצוב וחיטוב',
      teacher: 'תמר גולן',
      sessions: 6,
      startDate: new Date('2024-07-01'),
      price: 350,
      day: 'ג',
      hour: '18:15'
    }
  ];

  getLessons() {
    return this.lessons;
  }
}