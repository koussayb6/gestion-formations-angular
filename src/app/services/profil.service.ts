import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Profil} from "../models/Profil";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  baseurl = environment.api_uri + 'profil';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Profil[]> {
    return this.http.get<Profil[]>(this.baseurl);
  }

  getOneById(id: any): Observable<Profil> {
    return this.http.get<Profil>(this.baseurl + "/" + id);
  }

  addProfil(profil: any): Observable<any> {
    return this.http.post<any>(this.baseurl, profil)
  }

  deleteProfil(id: any): Observable<Profil> {
    return this.http.delete<Profil>(this.baseurl + "/" + id)
  }

  updateProfil(profil: any) {
    return this.http.put<any>(this.baseurl, profil)
  }

}
