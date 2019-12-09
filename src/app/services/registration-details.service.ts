import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationDetails } from '../interfaces/registration-details';

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

  constructor(private http: HttpClient) { }

  /** POST: Add data to database */
  registerdetails(Registration: RegistrationDetails): Observable<RegistrationDetails> {
    return this.http.post<RegistrationDetails>(this.url, Registration, httpOptions);
  }

}
