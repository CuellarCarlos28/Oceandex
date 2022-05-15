import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepagesComponent } from './homepages.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { ConocenosComponent } from './Components/conocenos/conocenos.component';
import { InformateComponent } from './Components/informate/informate.component';
import { ReporteComponent } from './Components/reporte/reporte.component';

import { InterfazComponent } from './Components/interfaz/interfaz.component';


import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
  declarations: [
    HomepagesComponent,
    InicioComponent,
    ConocenosComponent,
    InformateComponent,
    ReporteComponent,
    InterfazComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GoogleMapsModule
  ]
})
export class HomeModule { }
