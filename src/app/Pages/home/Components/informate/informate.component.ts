import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Especie } from 'src/app/especie';
import { EspeciesService  } from 'src/app/services/especies.service';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-informate',
  templateUrl: './informate.component.html',
  styleUrls: ['./informate.component.css']
})
export class InformateComponent implements OnInit {

  constructor(private _especies:EspeciesService, private router: Router, private http: HttpClient) { }
especies:Especie [] = [];

verEspecie(id:number){

  this.router.navigate(['/Prueba', id])

}



  ngOnInit(): void {
    
    this._especies.getEspecies().subscribe(res => {
      this.especies = res;
      console.log(res)
      console.log(this.especies)
    });

}
  }




