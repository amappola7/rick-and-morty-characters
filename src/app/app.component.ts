import { Component } from '@angular/core';
import { CharacterService } from './services/character.service';
import { ICharacter } from './interfaces/icharacter';
import { FormControl } from '@angular/forms';
import { faFilter, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  charactersList!: ICharacter[];
  speciesList: string[] = [];
  pages: number = 42;
  filterType: string = '';
  filter: string = '';
  paginator: FormControl  = new FormControl(1);
  speciesFilter: FormControl  = new FormControl('');
  searchInput: FormControl  = new FormControl('');
  showDetailsModal: boolean = false;
  currentCharacterId!: number;
  icons = {
    search: faMagnifyingGlass,
    filter: faFilter
  };

  constructor(
    private characterService: CharacterService
  ) {}

  ngOnInit() {
    this.getCharacters(1);
    this.speciesList = this.characterService.getSpecies();
  }

  getCharacters(page: number): void {
    this.characterService.getCharacters(page)
    .subscribe((list) => {
      const {info, results} = list;
      this.charactersList = results;
      this.pages = info.pages;
    });
  }

  getFilteredCharacters(filterType: string, filter: string): void {
    this.characterService.getFilteredCharacters(this.paginator.value, filterType, filter)
    .subscribe((list) => {
      const {info, results} = list;
      this.charactersList = results;
      this.pages = info.pages;
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
    this.getFilteredCharacters(this.filterType, this.filter);
  }

  onFilterChange(filterType: string, filter: string): void {
    this.getFilteredCharacters(filterType, filter);
    this.filterType = filterType;
    this.filter = filter;
  }
}
