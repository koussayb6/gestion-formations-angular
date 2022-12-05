import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Domaine} from "../models/Domaine";

@Injectable({
  providedIn: 'root'
})
export class DomaineService {

  baseurl=environment.api_uri+'domaine';
  constructor(private http:HttpClient) { }

  getAll():Observable<Domaine[]>{
    return this.http.get<Domaine[]>(this.baseurl);
  }

  getOneById(id:any):Observable<Domaine>{
    return this.http.get<Domaine>(this.baseurl+"/"+id);
  }
  addDomaine(domaine:any):Observable<any>{
    return this.http.post<any>(this.baseurl, domaine)

  }
  deleteDomaine( id:any):Observable<Domaine>{
    return this.http.delete<Domaine>(this.baseurl+"/"+id)
  }

  updateDomaine(domaine:any){
    return this.http.put<any>(this.baseurl, domaine )
  }
}
