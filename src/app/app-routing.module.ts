import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './pages/home-dashboard/home-dashboard.component';
import { WarehouseComponent } from './pages/warehouse/warehouse.component';


const routes: Routes = [
  { path: '', component: HomeDashboardComponent},
  { path: 'warehouse', component: WarehouseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
