import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';

const routes: Routes = [{path:'',
loadChildren: () => import ('./Pages/home/home.module').then(m => m.HomeModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes),GoogleMapsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
