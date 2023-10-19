import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private _url: string = 'https://rickandmortyapi.com/api/character';

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(): Observable<{}> {
    return this.http.get(this._url);
  }

  getCharactersPaginated(page: number): Observable<{}> {
    return this.http.get(`${this._url}?page=${page}`);
  }

  getCharacterById(id: number): Observable<{}> {
    return this.http.get(`${this._url}/${id}`);
  }
}
