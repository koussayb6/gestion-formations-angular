import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Participant} from "../models/Participant";

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  baseurl=environment.api_uri+'participant';
  constructor(private http:HttpClient) { }

  getAll():Observable<Participant[]>{
    return this.http.get<Participant[]>(this.baseurl);
  }

  getOneById(id:any):Observable<Participant>{
    return this.http.get<Participant>(this.baseurl+"/"+id);
  }
  addParticipant(participant:any,IdProfil:number, IdStructure:number, IdPays:number):Observable<any>{
    return this.http.post<any>(this.baseurl+"/"+IdProfil+"/"+IdStructure+"/"+IdPays, participant)

  }
  deleteParticipant( id:any):Observable<Participant>{
    return this.http.delete<Participant>(this.baseurl+"/"+id)
  }

  updateParticipant(participant:any,IdProfil:number, IdStructure:number, IdPays:number){
    return this.http.put<any>(this.baseurl+"/"+IdProfil+"/"+IdStructure+"/"+IdPays, participant )
  }
}
