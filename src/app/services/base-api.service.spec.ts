import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SnackBarService } from './snack-bar.service';
import { TestService } from './test.service';

describe('BaseApiService', () => {
  let service: TestService;
  let httpMock: HttpTestingController;
  let snackBarServiceSpy: jasmine.SpyObj<SnackBarService>;

  beforeEach(() => {
    snackBarServiceSpy = jasmine.createSpyObj('SnackBarService', ['openSnackBar']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TestService,
        { provide: SnackBarService, useValue: snackBarServiceSpy }
      ]
    });

    service = TestBed.get(TestService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });
  
});
