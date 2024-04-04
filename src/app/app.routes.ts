import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'heroes',
        pathMatch: 'full'
    },
    {
        path: 'heroes',
        loadChildren: () => import('./heroe/heroe.routes').then(m => m.HEROE_ROUTES)
    },
    { 
        path: '**', 
        component: NotFoundComponent 
    }
];
