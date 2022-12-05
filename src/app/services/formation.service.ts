import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Formation} from "../models/Formation";

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  baseurl=environment.api_uri+'course';
  constructor(private http:HttpClient) { }

  getAll():Observable<Formation[]>{
    return this.http.get<Formation[]>(this.baseurl);
  }

  getOneById(id:any):Observable<Formation>{
    return this.http.get<Formation>(this.baseurl+"/"+id);
  }
  addFormation(formation:any,idDomaine:number):Observable<any>{
    return this.http.post<any>(this.baseurl+"/"+idDomaine, formation)

  }
  deleteFormation( id:any):Observable<Formation>{
    return this.http.delete<Formation>(this.baseurl+"/"+id)
  }

  updateFormation(formation:any,idDomaine:number){
    return this.http.put<any>(this.baseurl+"/"+idDomaine, formation )
  }
}
