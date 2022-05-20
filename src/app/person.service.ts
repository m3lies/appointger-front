import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "./person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private personUrl: string;

  constructor(private http: HttpClient) {
    this.personUrl = 'http://localhost:8080/api/persons/';
  }

  public findAll(): Observable<Person[]> {
    console.log(this.http.get<Person[]>(this.personUrl))
    return this.http.get<Person[]>(this.personUrl);

  }

  public save(person: Person) {
    return this.http.post<Person>(this.personUrl, person);

  }

  public delete(id:number): Observable<object>{
    return this.http.delete(`${this.personUrl}${id}`);
  }
}
