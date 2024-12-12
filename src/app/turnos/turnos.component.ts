import { Component, OnInit } from '@angular/core';
import { TurnosService, medical_location } from '../turnos.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit{

  specialization!: Observable<{ id: string, name: string }[]>
  locations!: Observable<medical_location[]>

  constructor(private turnos: TurnosService){
    this.getSpecializations();
    this.getLocation('cardiology');
  }

  ngOnInit(): void {
    
  }

  getSpecializations() {
    this.specialization = this.turnos.getSpecializations()
  }

  getLocation(spec: string){
    this.locations = this.turnos.getLocations(spec);
  }

}
