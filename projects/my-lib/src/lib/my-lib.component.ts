import { Component } from '@angular/core';

import { ComponentService } from './component.service';

@Component({
  selector: 'lib-my-lib',
  template: `{{ something$ | async }}`,
  styles: [],
})
export class MyLibComponent {
  something$ = this.componentService.getSomething();

  constructor(private readonly componentService: ComponentService) {}
}
