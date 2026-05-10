import { Routes } from '@angular/router';
import { Login } from './login/login';
import { SignUp } from './sign-up/sign-up';
import { LessonList } from './lesson-list/lesson-list';


export const routes: Routes = [
    { path: '', component: Login },
    { path: 'lessons', component: LessonList },
    { path: 'sign-up', component: SignUp },
    { path: '**', redirectTo: '' }
];