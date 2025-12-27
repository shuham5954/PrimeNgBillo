import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'' , loadComponent: () => import('./login/login').then(c => c.Login)} ,
    {path:'admin' , loadComponent: () => import('./admin/admin').then(c => c.Admin)}
];
