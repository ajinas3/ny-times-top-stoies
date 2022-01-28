import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: '**',   redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsCategoriesRoutingModule { }
