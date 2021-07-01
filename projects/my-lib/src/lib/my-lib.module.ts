import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { MyLibComponent } from './my-lib.component';

@NgModule({
  declarations: [MyLibComponent],
  imports: [CommonModule],
  exports: [MyLibComponent],
})
export class MyLibModule {
  static forRoot(): ModuleWithProviders<MyLibModule> {
    return {
      ngModule: MyLibModule,
      providers: [],
    };
  }
}
