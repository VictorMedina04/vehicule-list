import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehiculeListResponse } from '../interfaces/Vehicule';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor(private http: HttpClient) { }

  getVehicules(): Observable<VehiculeListResponse> {
    return this.http.get<VehiculeListResponse>('https://swapi.dev/api/vehicles');
  }
}