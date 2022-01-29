import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsCategoriesRoutingModule } from './news-categories-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { CategoriesComponent } from './components/categories';
import { NewsCardsComponent } from './components/news-cards/news-cards.component';
import { DetailedNewsComponent } from './components/detailed-news/detailed-news.component';
import { MatButtonModule } from '@angular/material/button';
import { NewsCommentsComponent } from './components/news-comments/news-comments.component';
import { SearchNewsComponent } from './components/search-news/search-news.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    NewsCardsComponent,
    DetailedNewsComponent,
    NewsCommentsComponent,
    SearchNewsComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    NewsCategoriesRoutingModule
  ]
})
export class NewsCategoriesModule { }
