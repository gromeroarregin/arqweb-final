import { Component, Input, Output, EventEmitter } from '@angular/core';
import { doctor } from '../turnos.service';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent {
  @Input() doc: doctor | undefined;
  @Output() notify = new EventEmitter();
}
