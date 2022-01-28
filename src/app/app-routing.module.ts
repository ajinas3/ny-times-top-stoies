import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./entry').then(m => m.EntryModule)
  },
  {
    path: 'news-categories',
    canActivate: [AuthGuard],
    loadChildren: () => import('./news-categories').then(m => m.NewsCategoriesModule,)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
