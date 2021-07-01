import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AppService {
  getSomething(): Observable<string> {
    return of('something');
  }
}
