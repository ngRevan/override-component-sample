import { Component } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService],
})
export class AppComponent {
  title = 'TestAngular';

  something$ = this.appService.getSomething();

  constructor(private readonly appService: AppService) {}
}
