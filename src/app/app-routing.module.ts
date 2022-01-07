import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'main-page',
    component: MainPageComponent
  },
  // {
  //   path: 'client/historical-consumption',
  //   component: HistoricalConsumptionComponent,
  //   canActivate: [LoginGuard],
  //   data: {expectedRole: 'client'}
  // },
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
