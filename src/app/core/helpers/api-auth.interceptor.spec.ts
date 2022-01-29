import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { ApiAuthInterceptor } from './api-auth.interceptor';

describe('ApiAuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [MatSnackBarModule, RouterTestingModule, HttpClientTestingModule],
    providers: [
      ApiAuthInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiAuthInterceptor = TestBed.inject(ApiAuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
