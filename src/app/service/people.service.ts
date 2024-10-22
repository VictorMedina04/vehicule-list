import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeopleListResponse } from '../interfaces/People';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(): Observable<PeopleListResponse> {
    return this.http.get<PeopleListResponse>('https://swapi.dev/api/people');
  }
}
