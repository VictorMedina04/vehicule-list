import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../../interfaces/Vehicule';
import { VehiculeService } from '../../service/vehicule.service';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrl: './vehicule.component.css'
})
export class VehiculeComponent implements OnInit {

  listadoVehicules: Vehicule[] = [];
  constructor(private vehiculeService:VehiculeService) { }

  ngOnInit(): void {
    this.vehiculeService.getVehicules().subscribe(respuesta =>{
      this.listadoVehicules = respuesta;
    });
  }

}
