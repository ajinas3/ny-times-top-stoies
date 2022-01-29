import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';

import { NewsCardsComponent } from './news-cards.component';

describe('NewsCardsComponent', () => {
  let component: NewsCardsComponent;
  let fixture: ComponentFixture<NewsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsCardsComponent],
      imports: [MatDialogModule, StoreModule.forRoot({})],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
