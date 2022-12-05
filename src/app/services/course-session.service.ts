import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CourseSession} from "../models/CourseSession";

@Injectable({
  providedIn: 'root'
})
export class CourseSessionService {
  baseurl=environment.api_uri+'courseSession';
  constructor(private http:HttpClient) { }

  getAll():Observable<CourseSession[]>{
    return this.http.get<CourseSession[]>(this.baseurl);
  }

  getOneById(id:any):Observable<CourseSession>{
    return this.http.get<CourseSession>(this.baseurl+"/"+id);
  }
  addOrRemoveParticipant(idsession:number, idparticipant:number){
    return this.http.get<any>(this.baseurl+"/"+idsession+"/"+idparticipant)
  }
  addCourseSession(courseSession:any, IdStructure:number, IdTrainer:number, IdCourse:number):Observable<any>{
    delete courseSession.course;
    delete courseSession.structure;
    delete courseSession.trainer;
    console.log(courseSession.lieu)
    let session= new CourseSession();
    session.lieu=courseSession.lieu;
    session.date_fin=courseSession.date_fin;
    session.date_debut=courseSession.date_debut;
    session.nb_participant=courseSession.nb_participant;
    return this.http.post<any>(this.baseurl+"/"+IdStructure+"/"+IdTrainer+"/"+IdCourse, session,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })

  }

  deleteCourseSession( id:any):Observable<CourseSession>{
    return this.http.delete<CourseSession>(this.baseurl+"/"+id)
  }

  updateCourseSession(courseSession:any, IdStructure:number, IdTrainer:number, IdCourse:number){
    let session= new CourseSession();
    session.lieu=courseSession.lieu;
    session.date_fin=courseSession.date_fin;
    session.date_debut=courseSession.date_debut;
    session.nb_participant=courseSession.nb_participant;
    session.idCourseSession=courseSession.idCourseSession;
    return this.http.put<any>(this.baseurl+"/"+IdStructure+"/"+IdTrainer+"/"+IdCourse, session)
  }
}
