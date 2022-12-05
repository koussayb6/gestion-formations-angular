import { Component, OnInit } from '@angular/core';
import {CourseSession} from "../../models/CourseSession";
import {TokenStorageService} from "../../services/token-storage.service";
import {CourseSessionService} from "../../services/course-session.service";
import {ParticipantService} from "../../services/participant.service";
import {Participant} from "../../models/Participant";

@Component({
  selector: 'app-list-course-session',
  templateUrl: './list-course-session.component.html',
  styleUrls: ['./list-course-session.component.css']
})
export class ListCourseSessionComponent implements OnInit {

  courseSessions: CourseSession[];
  loggedIn:boolean=true;
  showEdit:boolean=false;
  courseSession:CourseSession;
  index:any;
  participants: Participant[];

  constructor(private courseSessionService: CourseSessionService, private tokenStorage: TokenStorageService, private participantService: ParticipantService) {
  }

  ngOnInit(): void {
    this.courseSessionService.getAll().subscribe(
      (result) => {
        this.courseSessions = result;
      }
    )
    this.participantService.getAll().subscribe(
      (result) => {
        this.participants = result;
      }
    )
    if(this.tokenStorage.getToken()){
      this.loggedIn=true;
    }
  }

  chooseSession(session:CourseSession){
    this.courseSession=session;
  }
  checkParticipant(idPart:number){
    return this.courseSession.participants.find(element => {
      if (element.idParticipant === idPart) {
        return true;
      }

      return false;
    });
  }
  addOrRmParticipant(idPart:number){
    this.courseSessionService.addOrRemoveParticipant(this.courseSession.idCourseSession, idPart).subscribe((result)=>{
      this.courseSession=result.object
    })
  }

  addcourseSession(event:any){
    let idstructure=event[1].idStructure;
    let idTrainer=event[2].idTrainer;
    let idCourse=event[3].idCourse;

    let close=document.getElementById("close");
    close?.click();
    console.log(event[0]);
    this.courseSessionService.addCourseSession(event[0],idstructure,idTrainer,idCourse).subscribe((resultat)=>{
        console.log(resultat);
        this.courseSessions.unshift(resultat.object);

      },
      (error)=>{
        console.log(error.status)
      }
    );

  }



  delete(idcourseSession:any){
    var result=confirm("Do you really want to delete this domain ?");
    if(result){
      this.courseSessionService.deleteCourseSession(idcourseSession).subscribe(
        () => this.courseSessions = this.courseSessions.filter(e => e.idCourseSession != idcourseSession),
      );}
    console.log(idcourseSession);
  }


  update(courseSession:any, i:any){
    this.showEdit=true;
    this.courseSession=courseSession;
    this.index=i;
  }

  updateCourseSession(event:any){
    this.showEdit=false;
    let close=document.getElementById("close");
    close?.click();

    let idstructure=event[1].idStructure;
    let idTrainer=event[2].idTrainer;
    let idCourse=event[3].idCourse;

    event[0].idCourseSession=this.courseSession.idCourseSession;
    this.courseSessionService.updateCourseSession(event[0],idstructure,idTrainer,idCourse).subscribe((result)=>
    { this.courseSessions[this.index]=result.object;

    });


  }



}
