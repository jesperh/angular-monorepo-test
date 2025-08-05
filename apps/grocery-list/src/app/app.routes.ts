import { Route } from '@angular/router';
import { List } from './list/list';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: List
    }
];
