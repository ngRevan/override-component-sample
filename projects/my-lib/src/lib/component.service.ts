import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ComponentService {
  getSomething(): Observable<string> {
    return of('something');
  }
}
