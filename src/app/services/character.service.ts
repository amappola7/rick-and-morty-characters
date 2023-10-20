import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacter } from '../interfaces/icharacter';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private _url: string = 'https://rickandmortyapi.com/api/character';
  speciesList: string[] = []

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
    const pages: number = 42;
    let species: string[] = [];

    for(let i = 1; i <= 42; i++) {
      this.getCharacters(i)
      .subscribe((charactersList) => {
        const {info, results} = charactersList;
        results.forEach((character: ICharacter) => {if(!species.includes(character.species)) species.push(character.species)});
      })
    }

    return this.speciesList = species;
  }
}
