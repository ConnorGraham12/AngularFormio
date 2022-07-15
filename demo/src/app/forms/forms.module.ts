import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormioModule } from '@formio/angular';
import { SimpleComponent } from './simple/simple.component';

import { FormsComponent } from './forms/forms.component';
import { FORMS } from './forms.index';
import { DirectDepositUpdateComponent } from './direct-deposit-update/direct-deposit-update.component';

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    RouterModule.forChild([{
      path: '',
      component: FormsComponent,
      children: FORMS
    }])
  ],
  declarations: [

    SimpleComponent,
    FormsComponent,
    DirectDepositUpdateComponent
  ],
  bootstrap: [
    FormsComponent
  ]
})
export class FormsModule { }
