import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopCardsComponent } from './components/top-cards/top-cards.component';
import { SalesSummaryComponent } from './components/sales-summary/sales-summary.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TopSellingComponent } from './components/top-selling/top-selling.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidadorFormControlComponent } from './reusable/validador-form-control/validador-form-control.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    SpinnerComponent,
    TopCardsComponent,
    SalesSummaryComponent,
    TopSellingComponent,
    ValidadorFormControlComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    NgApexchartsModule
  ],
  exports:[
    SpinnerComponent,
    SidebarComponent,
    HeaderComponent,
    TopCardsComponent,
    SalesSummaryComponent,
    TopSellingComponent,
    ValidadorFormControlComponent
  ]
})
export class SharedModule { }
