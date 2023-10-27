import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { speciesList } from '../data/species';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private _url: string = 'https://rickandmortyapi.com/api/character';

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(page: number): Observable<any> {
    return this.http.get(`${this._url}?page=${page}`).pipe(
      take(1)
    );
  }

  getCharacterById(id: number): Observable<any> {
    return this.http.get(`${this._url}/${id}`).pipe(
      take(1)
    );
  }

  getFilteredCharacters(page: number, filterType: string, filter: string): Observable<any> {
    return this.http.get(`${this._url}?page=${page}&${filterType}=${filter}`).pipe(
      take(1)
    );
  }

  getSpecies(): string[] {
    return speciesList;
  }
}
