import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from 'src/app/interfaces/icharacter';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  character!: ICharacter;
  @Input() characterID!: number;
  @Output() closeDetailsModal: EventEmitter<boolean> = new EventEmitter(false);

  constructor(
    private characterService: CharacterService
  ) {}

  ngOnChanges() {
    this.characterService.getCharacterById(this.characterID)
    .subscribe((character) => this.character = character);
  }

  onCloseDetailsModal() {
    this.closeDetailsModal.emit();
  }
}
