import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicule } from '../interfaces/Vehicule';


@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor(private http: HttpClient) { 

  }
  getVehicules() : Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>('https://swapi.dev/api/vehicules/');
  }
}
