import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';

// tslint:disable-next-line:class-name
export interface spacyapiobject{
  'tag': string;
  'text': number;
}
export interface spacyResponse{
  words: spacyapiobject[];
}
@Injectable({
  providedIn: 'root'
})
export class SpacyapiService {

  constructor(private http: HttpClient) {
  }

  makeRequest(text: string, lang: string): Observable<spacyResponse> {
    return this.http.post<spacyResponse>('/frag', {
      model: lang,
      text
    });
  }
}
