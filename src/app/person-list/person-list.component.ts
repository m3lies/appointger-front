import { Component, OnInit } from '@angular/core';
import {PersonService} from "../person.service";
import {Person} from "../person";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[];

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    this.getPersons();
  }

  getPersons (){
    this.personService.findAll().subscribe(data => {
      this.persons = data;
    });
  }

deletePerson(id: number){
    this.personService.delete(id).subscribe(data=> this.getPersons());
}
}
