import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface doctor{
  id: string;
  name: string;
  available: boolean;
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
    getSpecializations(): Observable<specialization[]> {
      return this.http.get<specialization[]>(this.Url);
    }


    getLocations(specId: string): Observable<medical_location[]> {
      let result = this.http.get<any[]>(this.Url).pipe(                                //Obtener el json y hacer algo a continuacion (pipe)
        map(elem => {                                                                  //Por cada elemento...
          const spec = elem.find(specialization => specialization.id === specId);      //Buscar la especializacion seleccionada
          return spec ? spec.locations: [];                                            //Si se encuentra se retorna el observable con las ubicaciones
        })
      )
      return result;
    }

    getDoctors(specID: string, locID: string): Observable<doctor[]> {
      let result = this.getLocations(specID).pipe(
        map(elem => {
          const loc = elem.find(location => location.id === locID);
          return loc ? loc.doctors: [];
        })
      )
      return result;
    }

}