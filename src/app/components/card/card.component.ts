import { Component, Input } from '@angular/core';
import { ICharacter } from 'src/app/interfaces/icharacter';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() characterInfo!: ICharacter;
}
