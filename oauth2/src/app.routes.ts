import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/components/app.layout';
import { AuthGuard } from 'common-lib/src/lib/services/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app/layout/components/app.layout').then(m => m.AppLayout),
    children: [
      {
        canActivate: [AuthGuard],
        path: 'test',
        loadComponent: () => import('./app/components/test/test.component').then(m => m.TestComponent)
      },
      {
        path: 'test01',
        loadComponent: () => import('./app/components/test02/test02.component').then(m => m.Test02Component)
      },
    ]
  },
  {
    path: 'oauth2-callback',
    loadComponent: () => import('common-lib/src/lib/components/oauth2-callback.component').then(m => m.Oauth2CallbackComponent)
  },
];
