import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {ActivityCard} from './activityCard';
import {TravelStoryCard} from './TravelStoryCard';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin': 'https://travelstory-client.herokuapp.com'})
};

@Injectable({
  providedIn: 'root',
})
export class TravelStoryService {

  private basicUrl = 'https://travelstory-client.herokuapp.com/admin/statistic';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getTravelStoryCard(): Observable<TravelStoryCard> {
    return this.http.get<TravelStoryCard>(this.basicUrl.concat('s/travelStory'));
  }
}

