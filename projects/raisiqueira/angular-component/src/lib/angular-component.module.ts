import { NgModule } from '@angular/core';
import { AngularComponentComponent } from './angular-component.component';
import { ButtonComponent } from './button/button.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

@NgModule({
  declarations: [AngularComponentComponent, ButtonComponent, AutocompleteComponent],
  imports: [
  ],
  exports: [AngularComponentComponent]
})
export class AngularComponentModule { }
