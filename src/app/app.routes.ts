import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { ModuleWithProviders } from '@angular/core';
import { MaterialModule } from './material.module';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { InformationComponent } from './core/users/information/information.component';
import { AllProjectComponent } from './projectManager/allProject/allProject.component';
import { AddProjectComponent } from './projectManager/addProject/addProject.component';

export const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'core/myprofile', component: InformationComponent,
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.routes').then((m) => m.PagesRoutes),
      },
      {
        path: 'project/allProject', component: AllProjectComponent,
      },
      {
        path: 'project/addProject', component: AddProjectComponent,
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.routes').then((m) => m.ExtraRoutes),
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.routes').then(
            (m) => m.AuthenticationRoutes
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];
//export const AppRoutes: ModuleWithProviders<MaterialModule> = RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy });
