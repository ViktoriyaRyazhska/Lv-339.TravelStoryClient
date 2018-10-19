import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginDTO} from '../models/LoginDTO';
import {RegistrationDTO} from '../models/RegistrationDTO';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }
  registrate(registrationDTO: RegistrationDTO): Observable<any> {
    return this.http.post('https://travelstory-server.herokuapp.com/api/registrate', registrationDTO);
  }
}