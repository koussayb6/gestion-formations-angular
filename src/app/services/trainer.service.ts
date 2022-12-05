import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Trainer} from "../models/Trainer";
import {Domaine} from "../models/Domaine";

@Injectable({
  providedIn: 'root'
})
export class trainerService {

  baseurl=environment.api_uri+'trainer';
  constructor(private http:HttpClient) { }

  getAll():Observable<Trainer[]>{
    return this.http.get<Trainer[]>(this.baseurl);
  }

  getOneById(id:any):Observable<Trainer>{
    return this.http.get<Trainer>(this.baseurl+"/"+id);
  }

  addTrainer(trainer:any,IdStructure:number):Observable<any>{
    return this.http.post<any>(this.baseurl+"/"+IdStructure,trainer);}

  deleteTrainer( id:any):Observable<Domaine>{
    return this.http.delete<Domaine>(this.baseurl+"/"+id)}

  updateTrainer(trainer:any,IdStructure:number){
    return this.http.put<any>(this.baseurl+"/"+IdStructure, trainer )
  }
}
