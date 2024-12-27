import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/apps',
    pathMatch: 'full',
  },
  {
    path: 'apps',
    children: [
      {
        path: 'mfe1',
        loadChildren: () =>import('mfe1/CounterModule').then((m) => m.CounterModule)},
      {
        path: 'mfe2',
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: 'http://localhost:4400/remoteEntry.js',
            remoteName: 'mfe2',
            exposedModule: './AppModule', // Replace with your module
          }).then((m) => m.AppModule),
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
