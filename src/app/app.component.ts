import { Component } from '@angular/core';
import { CharacterService } from './services/character.service';
import { ICharacter } from './interfaces/icharacter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  charactersList!: ICharacter[];

  constructor(
    private characterService: CharacterService
  ) {}

  ngOnInit() {
    this.characterService.getCharacters(1)
    .subscribe((list) => {
      const {info, results} = list;
      this.charactersList = results;
    });
  }
}
