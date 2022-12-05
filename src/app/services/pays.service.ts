import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pays} from "../models/Pays";

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  baseurl=environment.api_uri+'pays';
  constructor(private http:HttpClient) { }

  getAll():Observable<Pays[]>{
    return this.http.get<Pays[]>(this.baseurl);
  }

  getOneById(id:any):Observable<Pays>{
    return this.http.get<Pays>(this.baseurl+"/"+id);
  }
  addPays(pays:any):Observable<any>{
    return this.http.post<any>(this.baseurl, pays)

  }
  deletePays( id:any):Observable<Pays>{
    return this.http.delete<Pays>(this.baseurl+"/"+id)
  }

  updatePays(pays:any){
    return this.http.put<any>(this.baseurl, pays )
  }
}
