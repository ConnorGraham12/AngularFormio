import { DemographicChangeComponent } from './demographic-change/demographic-change.component';
import { DirectDepositUpdateComponent } from './direct-deposit-update/direct-deposit-update.component';
import { SimpleComponent } from './simple/simple.component';

export const FORMS: any = [
  {
    path: '',
    redirectTo: 'renderer',
    pathMatch: 'full'
  }, 
  {
    path: 'simple',
    title: 'Simple Form',
    component: SimpleComponent
  },
  {
    path: 'demographic',
    title: 'Demographic Change Form',
    component: DemographicChangeComponent
  },
  {
    path: 'directdeposit',
    title: 'Direct Deposit Update Form',
    component: DirectDepositUpdateComponent
  },

];
