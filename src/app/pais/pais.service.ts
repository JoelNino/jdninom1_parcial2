import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { PaisDetail } from './pais-detail';
import { PaisModel } from './PaisModel';


@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://gist.githubusercontent.com/fai-aher/434fb96e22762f4d7ebf2d5179eb8622/raw/6692b671d7e76cb40df7a56f88afda080a0f3392/countries.json'

  constructor(private http: HttpClient) {}

  getPaises(): Observable<PaisDetail[]> {
    return this.http.get<PaisDetail[]>(this.apiUrl)
  }


}
