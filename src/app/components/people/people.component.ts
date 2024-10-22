import { Component, OnInit } from '@angular/core';
import { listadoPersonas, PeopleListResponse } from '../../interfaces/People';
import { PeopleService } from '../../service/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent implements OnInit {

  listadoPersonas: listadoPersonas[] = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(respuesta => {
      this.listadoPersonas = respuesta.results;
    });
  }

  createImg(url: string) {

    let subcadenas = url.split('/');
    let id = subcadenas[subcadenas.length - 2];
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  }

}