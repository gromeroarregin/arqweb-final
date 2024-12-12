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

  selectedSpec: string;
  selectedLoc: string;

  constructor(private turnos: TurnosService){
    this.selectedSpec = "";
    this.selectedLoc = "";
    this.getSpecializations();
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

  selectSpec(spec: string){
    if (this.selectedSpec == spec){
      this.selectedLoc = "";
      this.selectedSpec = "";
    }
    else{
      this.selectedSpec = spec;
      this.getLocation(this.selectedSpec);
    }
  }

  selectLoc(loc: string){
    if (this.selectedLoc == loc){
      this.selectedLoc = "";
    }
    else{
      this.selectedLoc = loc;
      this.getDoctor(this.selectedSpec, this.selectedLoc);
    }
  }

}
