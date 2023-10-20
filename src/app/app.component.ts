import { Component } from '@angular/core';
import { CharacterService } from './services/character.service';
import { ICharacter } from './interfaces/icharacter';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  charactersList!: ICharacter[];
  paginator: FormControl  = new FormControl(1);
  showDetailsModal: boolean = false;
  currentCharacterId!: number;

  constructor(
    private characterService: CharacterService
  ) {}

  ngOnInit() {
    this.getCharacters(1);
  }

  getCharacters(page: number): void {
    this.characterService.getCharacters(page)
    .subscribe((list) => {
      const {info, results} = list;
      this.charactersList = results;
    });
  }

  onShowDetails(id: number): void {
    this.showDetailsModal = !this.showDetailsModal;
    this.currentCharacterId = id;
  }

  onHideDetails(): void {
    this.showDetailsModal = false;
  }

  onPaginatorChange() {
    this.getCharacters(this.paginator.value);
  }
}
