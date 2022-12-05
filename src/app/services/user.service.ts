import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";
import {User} from "../models/User";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl=environment.api_uri+'user';
  constructor(private http: HttpClient) { }

  getAll():Observable<User[]>{
    return this.http.get<User[]>(this.baseurl);
  }

  getOneById(id:any):Observable<User>{
    return this.http.get<User>(this.baseurl+"/"+id);
  }

 /* addUser(user:any):Observable<any>{
    return this.http.post<any>(this.baseurl, user)
  }*/

  deleteUser( id:any):Observable<User>{
    return this.http.delete<User>(this.baseurl+"/"+id)
  }

  updateUser(user:any){
    return this.http.put<any>(this.baseurl, user )
  }

}
