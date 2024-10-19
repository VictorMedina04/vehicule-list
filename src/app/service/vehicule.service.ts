import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Respuesta} from '../interfaces/Vehicule';


@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor(private http: HttpClient) { 

  }
  
  getVehicules() : Observable<Respuesta> {
    return this.http.get<Respuesta>('https://swapi.dev/api/vehicles');
  }
}
