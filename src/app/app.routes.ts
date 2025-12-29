import { Routes } from '@angular/router';

export const routes: Routes = [

    {path:'login' , loadComponent: () => import('./login/login').then(c => c.Login)} ,
    {path:'' , loadComponent: () => import('./admin/admin').then(c => c.DrawerSizeDemo)}
];
