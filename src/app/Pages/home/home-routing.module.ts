import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepagesComponent } from './homepages.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { InformateComponent } from './Components/informate/informate.component';
import { ReporteComponent } from './Components/reporte/reporte.component';
import { ConocenosComponent } from './Components/conocenos/conocenos.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { InterfazComponent } from './Components/interfaz/interfaz.component';

const routes: Routes = [
  {path: '', component:HomepagesComponent,
children:[{path:'',component:InicioComponent},
{path:'Informate', component:InformateComponent},
{path:'Reporte',component:ReporteComponent },
{path: 'Conocenos', component:ConocenosComponent},
{path: 'Prueba/:id', component:InterfazComponent}

]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes),GoogleMapsModule],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
