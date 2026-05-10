import { Component, OnInit } from '@angular/core';
import { LessonService } from '../services/lesson.service';
import { LessonItem } from '../lesson-item/lesson-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lesson-list',
  standalone: true,
  imports: [LessonItem, CommonModule],
  templateUrl: './lesson-list.html',
  styleUrls: ['./lesson-list.css'],
})
export class LessonList implements OnInit {
  allLessons: any[] = []; // מערך שיכיל את השיעורים

  constructor(private lessonService: LessonService) { }

  ngOnInit() {
    // שליפת הנתונים מהסרוויס ברגע שהדף עולה
    this.allLessons = this.lessonService.getLessons();
    console.log('נמצאו שיעורים:', this.allLessons); // פתחי F12 בדפדפן כדי לבדוק
    return this.allLessons;
  }

}
