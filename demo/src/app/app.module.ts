import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Formio, FormioModule, FormioAppConfig } from '@formio/angular';
import { FormioGrid } from '@formio/angular/grid';
import { FormioAuthService, FormioAuthConfig } from '@formio/angular/auth';
import { FormioResources } from '@formio/angular/resource';
import { PrismService } from './Prism.service';

import { AppConfig } from './config';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { DemographicChangeComponent } from './forms/demographic-change/demographic-change.component';
import { authRoutes } from './auth/auth.module';


// Make sure we use fontawesome everywhere in Form.io renderers.
(Formio as any).icons = 'fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
    DemographicChangeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormioModule,
    FormioGrid,
    RouterModule.forRoot([
      {
        path: '',
        // ngif: auth.authenticated
        component: HomeComponent
      },
      {
        path: 'data',
        component: DataComponent
      },
      {
        path: 'forms',
        loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }

    ], {useHash: true})
  ],
  providers: [
    PrismService,
    FormioAuthService,
    FormioResources,
    {provide: FormioAppConfig, useValue: AppConfig},
    {provide: FormioAuthConfig, useValue: {
      login: {
        form: 'user/login'
      },
      register: {
        form: 'user/register'
      }
    }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
