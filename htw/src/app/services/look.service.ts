import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { Look } from '../models/look';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class LookService {

  private looksUrl = 'api/looks'; // URL to web api

  constructor(private http: HttpClient) { }

  getLooks(): Observable<Look[]> {
    return this.http.get<Look[]>(this.looksUrl);
  }

}
