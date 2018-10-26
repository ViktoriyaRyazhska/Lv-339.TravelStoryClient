import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {RegistrationCard} from './RegistrationCard';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin': 'https://travelstory-client.herokuapp.com'})
};

@Injectable({
  providedIn: 'root',
})
export class RegistrationCardService {

  private basicUrl = 'https://travelstory-client.herokuapp.com/admin/statistics';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getRegistrationCard(): Observable<RegistrationCard> {
    return this.http.get<RegistrationCard>(this.basicUrl.concat('/registration'));
  }
}

