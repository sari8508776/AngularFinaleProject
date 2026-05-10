import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-lesson-item',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './lesson-item.html',
  styleUrls: ['./lesson-item.css'],
})
export class LessonItem {
@Input() lesson: any; // קבלת פרטי השיעור מהקומפוננטה האב
// isStarted(): boolean {
//   const today = new Date();
//   const lessonDate = new Date(this.lesson.startTime);
//   return today > lessonDate;
// } 
isStarted(): boolean {
  if (!this.lesson || !this.lesson.startDate) return false;

  const today = new Date();
  // הפיכת הטקסט מהמערך לאובייקט תאריך אמיתי
  const start = new Date(this.lesson.startDate);

  // בדיקה ב-Console: אם זה מדפיס false לכולם, סימן שהתאריכים במערך לא כתובים נכון
  // console.log(this.lesson.name, start < today); 

  return start < today;
}
}
