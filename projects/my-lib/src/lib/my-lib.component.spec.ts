import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

import { ComponentService } from './component.service';
import { MyLibComponent } from './my-lib.component';
import { MyLibModule } from './my-lib.module';

export class ComponentServiceMock {
  getSomething(): Observable<string> {
    return of('mock');
  }
}

describe('MyLibComponent', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLibModule.forRoot()],
      declarations: [TestComponent],
    })
      .overrideComponent(MyLibComponent, {
        add: {
          providers: [
            { provide: ComponentService, useClass: ComponentServiceMock },
          ],
        },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    const myLibComponentElement = fixture.debugElement.query(
      By.directive(MyLibComponent)
    ).nativeElement;

    expect(myLibComponentElement.textContent.trim()).toBe('mock');
  });
});

@Component({
  template: '<lib-my-lib></lib-my-lib>',
})
export class TestComponent {}
