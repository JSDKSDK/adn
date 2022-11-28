import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/config/auth.guard';
import { AreaComponent } from '../components/area/area.component';
import { LoginComponent } from '../pages/auth/login/login.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { PagesComponent } from '../pages/pages.component';



const appRoutes: Routes = [
    {
      path: '',
      component: PagesComponent,
      // canActivate: [AuthGuard],
      children: [
        { path: '', component:DashboardComponent , data: { titulo: 'Pagina de inicio' } },
        { path: 'areas', component:AreaComponent , data: { titulo: 'area' } }
  
      ],
    },
    {
      path: 'login',
      component: LoginComponent,
    },
  ];
  
  export const PagesComponentsRoutes = RouterModule.forChild(appRoutes);
  