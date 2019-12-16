import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationDetails } from '../interfaces/registration-details';
import { map } from 'rxjs/operators'; // This is where I import map operator

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RegistrationDetailsService {
  url = 'https://udemy-aee88.firebaseio.com/data.json';
  // josnurl = 'https://udemy-aee88.firebaseio.com/data/-Lh9k2t3I__kTAmi6ATT.json';

  constructor(private http: HttpClient) { }

  /** POST: Add data to database */
  registerdetails(Registration: RegistrationDetails): Observable<RegistrationDetails> {
    return this.http.post<RegistrationDetails>(this.url, Registration, httpOptions);
  }

  getInfo(): Observable<RegistrationDetails[]> {
    return this.http.get<RegistrationDetails[]>(this.url);
  }

}
