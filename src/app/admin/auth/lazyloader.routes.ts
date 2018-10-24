import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import {DashboardCrmComponent} from '../dashboard-crm/dashboard-crm.component';
import {FeatureTableComponent} from '../table/feature-table/feature-table.component';

export const appRoutes: Routes = [{
    path: '', component: AuthComponent, children: [
        { path: 'dashboard', component: DashboardCrmComponent },
        { path: 'tables', loadChildren: '../tables/tables.module#TablesModule' },
        { path: 'maps', loadChildren: '../maps/maps.module#MapsModule' },
        { path: 'pages', loadChildren: '../pages/pages.module#PagesModule' }
  ]
}];
