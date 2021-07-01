import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

class AppServiceMock {
  getSomething(): Observable<string> {
    return of('mock');
  }
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    })
      .overrideComponent(AppComponent, {
        set: {
          providers: [{ provide: AppService, useClass: AppServiceMock }],
        },
      })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();

    fixture.detectChanges();

    expect(fixture.nativeElement.textContent.trim()).toBe('mock');
  });
});
