import { Route } from '@angular/router';
import { Home } from './home/home';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: Home,
  },
];
