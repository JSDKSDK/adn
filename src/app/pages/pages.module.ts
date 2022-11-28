import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponentsRoutes } from 'src/app/routes/app.routes';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    NopagefoundComponent
  ],
  imports: [
    CommonModule,
    PagesComponentsRoutes,
    SharedModule,
    NgbModule
  ]
})
export class PagesModule { }
