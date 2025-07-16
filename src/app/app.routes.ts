import { Routes } from '@angular/router';
export const routes: Routes = [
  
  {
    path: '',
    loadChildren: () =>
      import('./features/guest/guest.module').then((m) => m.GuestModule),
  },
  {
    path: 'home', loadChildren: ()=> import('./features/account/account.module').then((m)=>m.AccountModule)
  }
];
