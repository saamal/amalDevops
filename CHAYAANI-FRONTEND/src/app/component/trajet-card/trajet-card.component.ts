import {Component, Input} from '@angular/core';
import {Trajet} from "../../model/Trajet";



@Component({
  selector: 'app-trajet-card',
  templateUrl: './trajet-card.component.html',
  styleUrls: ['./trajet-card.component.css']
})
export class TrajetCardComponent {
  @Input()
  trajet!: Trajet;
}
