import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Structure} from "../models/Structure";

@Injectable({
  providedIn: 'root'
})
export class StructureService {

  baseurl=environment.api_uri+'structure';
  constructor(private http:HttpClient) { }

  getAll():Observable<Structure[]>{
    return this.http.get<Structure[]>(this.baseurl);
  }

  getOneById(id:any):Observable<Structure>{
    return this.http.get<Structure>(this.baseurl+"/"+id);
  }
  addStructure(structure:any):Observable<any>{
    return this.http.post<any>(this.baseurl, structure)

  }
  deleteStructure( id:any):Observable<Structure>{
    return this.http.delete<Structure>(this.baseurl+"/"+id)
  }

  updateStructure(structure:any){
    return this.http.put<any>(this.baseurl, structure)
  }
}
