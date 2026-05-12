import { Component, OnInit } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular'; // 1. ייבוא המודול של הטבלה
import { CommonModule } from '@angular/common';
import { ColDef } from 'ag-grid-community';
import { StudentService } from '../services/student.service';
import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';

// 2. רשמי את המודולים (חובה להוסיף את השורה הזו מחוץ ל-Class):
ModuleRegistry.registerModules([ AllCommunityModule ]);
@Component({
  selector: 'app-sign-up',
  standalone: true,
  // 2. הוספת AgGridModule לרשימת הייבוא כאן
  imports: [CommonModule, AgGridModule], 
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp implements OnInit {
  rowData: any[] = [];
 columnDefs: ColDef[] = [
    { field: 'firstName', headerName: 'שם פרטי', filter: 'agTextColumnFilter',flex: 1 },
    { field: 'lastName', headerName: 'שם משפחה', filter: 'agTextColumnFilter',flex: 1 },
    { field: 'phone', headerName: 'טלפון' , filter: 'agNumberColumnFilter',flex: 1},
    { field: 'idNumber', headerName: 'תעודת זהות' , filter: 'agTextColumnFilter',flex: 1},
    { field: 'lessonName', headerName: 'שיעור', sortable: true, filter: 'agTextColumnFilter',flex: 1 },
    { field: 'price', headerName: 'מחיר', sortable: true, filter: 'agNumberColumnFilter' ,flex: 1},
    { 
       field: 'isPaid', 
      headerName: 'סטטוס תשלום',
     
      // פונקציה קטנה שהופכת true/false למילה בעברית
      valueFormatter: params => params.value ? 'שולם' : 'לא שולם'
      
    },
    {
       field:'details',
       headerName: 'פרטים',
        cellRenderer: (params:any) => {
          // יצירת כפתור קטן בתוך התא
          const button = document.createElement('button');
          button.classList.add('details-btn');
          button.innerText = 'הצג פרטים';
          button.addEventListener('click', () => {
            alert(`פרטי נרשם:\nשם: ${params.data.firstName} ${params.data.lastName}\nטלפון: ${params.data.phone}\nת.ז.: ${params.data.idNumber}\nשיעור: ${params.data.lessonName}\nמחיר: ${params.data.price}\nסטטוס תשלום: ${params.data.isPaid ? 'שולם' : 'לא שולם'}`);
          });
          return button;
        }

    }
  ];
        constructor(private studentService: StudentService) {}

    ngOnInit() {
    this.rowData = this.studentService.getEnrollments();
  }
  // פונקציה שמקבלת את הפרמטרים של השורה ומחזירה עיצוב
getRowStyle = (params: any) => {
    if (params.data.isPaid === false) {
        return { 
            backgroundColor: '#fff9c4', // צהוב בהיר מאוד
            fontWeight: 'bold',
            fontStyle: 'italic'
        };
    }
    return undefined; // שורה רגילה למי ששילמה
};
  
}

