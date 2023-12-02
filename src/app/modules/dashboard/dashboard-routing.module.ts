import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, loadChildren: () => import('./router-child.molule').then(n => n.RouterChildModule) },
  {
    path: 'dashboard/:nombreCorto', component: DashboardComponent, loadChildren: () => import('./router-child.molule').then(n => n.RouterChildModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
