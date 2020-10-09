import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse,  } from '@angular/common/http';
import { Travel } from '../models/travel';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    // 'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};
const apiUrl = 'http://localhost:8080/api/travels';

@Injectable({
  providedIn: 'root'
})
export class TravelsService {

  currentTravelId: number;
  currentTravelImg1: string;
  currentTravelImg2: string;
  currentTravelImg3: string;

  idPlace: string;

  constructor(private http: HttpClient) { }

  getTravels(): Observable<Travel[]> {
    return this.http.get<Travel[]>(apiUrl);
  };


  deleteTravel(id: number): Observable<any>{
    return this.http.delete(apiUrl + "/" + id);
  };
  
  addTravel(travel: Travel): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("name", travel.name);
    bodyEncoded.append("descripcion", travel.descripcion);
    bodyEncoded.append("subname", travel.subname);
    bodyEncoded.append("descripcion2", travel.descripcion2);
    let body = bodyEncoded.toString();

    return this.http.post(apiUrl, body, httpOptions);
  };


  setCurrentTravelId(id: number){
    this.currentTravelId = id;
  }

  getCurrentTravelId(): number{
    return this.currentTravelId;
  }
  setCurrentTravelImg1(data: string){
    this.currentTravelImg1 = data;
  }

  getCurrentTravelImg1(): string{
    return this.currentTravelImg1;
  }
  setCurrentTravelImg2(data: string){
    this.currentTravelImg2 = data;
  }

  getCurrentTravelImg2(): string{
    return this.currentTravelImg2;
  }
  setCurrentTravelImg3(data: string){
    this.currentTravelImg3 = data;
  }

  getCurrentTravelImg3(): string{
    return this.currentTravelImg3;
  }

  getTravelId(id: number): Observable<Travel>{
    console.log(this.currentTravelId);
    return this.http.get<Travel>(apiUrl+'/'+id);
  }

  updateTravel(travel: Travel){
    let apiUrlData = `${apiUrl}/${this.getCurrentTravelId()}`;
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("name", travel.name);
    bodyEncoded.append("descripcion", travel.descripcion);
    bodyEncoded.append("img1", this.getCurrentTravelImg1());
    bodyEncoded.append("img2", this.getCurrentTravelImg2());
    bodyEncoded.append("img3", this.getCurrentTravelImg3());
    bodyEncoded.append("subname", travel.subname);
    bodyEncoded.append("descripcion2", travel.descripcion2);
    let body = bodyEncoded.toString();

    return this.http.put(apiUrlData, body, httpOptions);
  }

}
