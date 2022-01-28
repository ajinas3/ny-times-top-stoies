import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsCategoriesRoutingModule } from './news-categories-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';

import { CategoriesComponent } from './components/categories';
import { NewsCardsComponent } from './components/news-cards/news-cards.component';
import { DetailedNewsComponent } from './components/detailed-news/detailed-news.component';
import { MatButtonModule } from '@angular/material/button';
import { NewsCommentsComponent } from './components/news-comments/news-comments.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    NewsCardsComponent,
    DetailedNewsComponent,
    NewsCommentsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
    NewsCategoriesRoutingModule
  ]
})
export class NewsCategoriesModule { }
