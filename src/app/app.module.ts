import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutesModule } from 'src/config/routes.module';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegistrerComponent } from './pages/auth/registrer/registrer.component';
import { AreaComponent } from './components/area/area.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrerComponent,
    AreaComponent,
   
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RoutesModule,
    HttpClientModule,
    ReactiveFormsModule,
    PagesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
