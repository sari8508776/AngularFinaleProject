import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  // רשימת נרשמות לשיעורים
  private enrollments = [
    {
      firstName: 'מיכל',
      lastName: 'אזולאי',
      phone: '050-1234567',
      idNumber: '123456789',
      lessonName: 'פילאטיס מכשירים',
      price: 600,
      isPaid: true
    },
    {
      firstName: 'דנה',
      lastName: 'מלכה',
      phone: '052-9876543',
      idNumber: '987654321',
      lessonName: 'זומבה',
      price: 450,
      isPaid: false
    },
    {
      firstName: 'שירה',
      lastName: 'לוין',
      phone: '054-5556667',
      idNumber: '222333444',
      lessonName: 'קיקבוקסינג',
      price: 700,
      isPaid: true
    },
    {
      firstName: 'נועה',
      lastName: 'קסטן',
      phone: '058-1112223',
      idNumber: '333444555',
      lessonName: 'יוגה ויניאסה',
      price: 550,
      isPaid: false
    },
    {
      firstName: 'רחל',
      lastName: 'ביטון',
      phone: '053-4445556',
      idNumber: '444555666',
      lessonName: 'עיצוב וחיטוב',
      price: 350,
      isPaid: true
    }
  ];

  // פונקציה שמאפשרת לקבל את רשימת הנרשמות
  getEnrollments() {
    return this.enrollments;
  }

}
