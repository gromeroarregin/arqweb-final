import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface doctor{
  id: string;
  name: string;
}

export interface medical_location{
  id: string;
  name: string;
  address: string;
  doctors: doctor[]
}

export interface specialization{
  id: string;
  name: string;
  locations: medical_location[]
}

@Injectable({
  providedIn: 'root'
})

export class TurnosService {

  Url: string;

  constructor(private http: HttpClient) {
    this.Url = '/assets/seleccion_medica.json';
  }


    // GET para obtener las especializaciones médicas
    getSpecializations() {
      return this.http.get<{ id: string, name: string }[]>(this.Url);
    }

    // GET para obtener los lugares de atención basados en especialización
    //getLocations(specializationId: string) {
      //return this.http.get<{ id: string, name: string, address: string }[]>(/assets/seleccion_medica.json?specializationId=${specializationId});
    //}

    // GET para obtener los doctores basados en especialización y lugar
    //getDoctors(specializationId: string, locationId: string) {
    //  return this.http.get<{ id: string, name: string, specialization: string, location: string }[]>(/assets/seleccion_medica.json?specializationId=${specializationId}&locationId=${locationId});
    //}

    getLocations(specId: string): Observable<medical_location[]> {
      let result = this.http.get<any[]>(this.Url).pipe(                                //Obtener el json y hacer algo a continuacion (pipe)
        map(elem => {                                                                  //Por cada elemento...
          const spec = elem.find(specialization => specialization.id === specId);      //Buscar la especializacion seleccionada
          return spec ? spec.locations: [];                                            //Si se encuentra se retorna el observable con las ubicaciones
        })
      )
      return result;
    }

}