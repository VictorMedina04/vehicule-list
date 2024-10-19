import { Component, OnInit } from '@angular/core';
import { listadoVehicules, Respuesta } from '../../interfaces/Vehicule';
import { VehiculeService } from '../../service/vehicule.service';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrl: './vehicule.component.css'
})
export class VehiculeComponent implements OnInit {

  listadoVehicules: listadoVehicules[] = [];
  constructor(private vehiculeService:VehiculeService) {}

  ngOnInit(): void {
    this.vehiculeService.getVehicules().subscribe(respuesta =>{
      this.listadoVehicules = respuesta.results;
    });
  }

  createImg(url : string){
   
    let subcadenas = url.split('/');
    let id = subcadenas[subcadenas.length - 2];

    return `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;
  }

}
