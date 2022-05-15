import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EspeciesService } from 'src/app/services/especies.service';
import { Especie } from '../../../../especie';

@Component({
  selector: 'app-interfaz',
  templateUrl: './interfaz.component.html',
  styleUrls: ['./interfaz.component.css']
})
export class InterfazComponent implements OnInit {
  especies: Especie  []= [] ;
  
   
  constructor(private activateRoute: ActivatedRoute, private _especies:EspeciesService) {
  
  }

  ngOnInit(): void {

    var id = "1";
    this.activateRoute.params.subscribe(params =>{
       id = params['id'];
      this._especies.getEspecie(id).subscribe(res =>{
        this.especies.push(  res);
          console.log(this.especies)
        }
      )
    })
  }

}
