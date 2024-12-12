import { Component, OnInit } from '@angular/core';
import { TurnosService, medical_location, specialization, doctor } from '../turnos.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit{

  specialization!: Observable<specialization[]>
  locations!: Observable<medical_location[]>
  doctors!: Observable<doctor[]>

  constructor(private turnos: TurnosService){
    this.getSpecializations();
    this.getLocation('cardiology');
    this.getDoctor('cardiology', 'clinic_123');
  }

  ngOnInit(): void {
    
  }

  getSpecializations() {
    this.specialization = this.turnos.getSpecializations()
  }

  getLocation(spec: string){
    this.locations = this.turnos.getLocations(spec);
  }

  getDoctor(spec: string, loc: string){
    this.doctors = this.turnos.getDoctors(spec, loc);
  }

}
