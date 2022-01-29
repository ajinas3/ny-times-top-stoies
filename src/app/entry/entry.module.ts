import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryRoutingModule } from './entry-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { LoginComponent } from './components/login';
import { RegisterComponent } from './components/register';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    EntryRoutingModule
  ]
})
export class EntryModule { }
