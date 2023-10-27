import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.http.get(`${this._url}?page=${page}`)
  }

  getCharacterById(id: number): Observable<any> {
    return this.http.get(`${this._url}/${id}`);
  }

  getFilteredCharacters(page: number, filterType: string, filter: string): Observable<any> {
    return this.http.get(`${this._url}?page=${page}&${filterType}=${filter}`)
  }

  getSpecies(): string[] {
    return speciesList;
  }
}
