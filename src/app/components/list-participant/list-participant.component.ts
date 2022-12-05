import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {Participant} from "../../models/Participant";
import {ParticipantService} from "../../services/participant.service";

@Component({
  selector: 'app-list-participant',
  templateUrl: './list-participant.component.html',
  styleUrls: ['./list-participant.component.css']
})
export class ListParticipantComponent implements OnInit {
  participants: Participant[];
  loggedIn:boolean=true;
  showEdit:boolean=false;
  participant:Participant;
  index:any;

  constructor(private participantService: ParticipantService, private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.participantService.getAll().subscribe(
      (result) => {
        this.participants = result;
        console.log(this.participants);
      }

    )
    if(this.tokenStorage.getToken()){
      this.loggedIn=true;
    }
  }


  addParticipant(event:any){
    let idprofil=event[1].idProfil;
    let idstructure=event[2].idStructure;
    let idpays=1;
    if(event[3]) idpays=event[3].idPays;
    let close=document.getElementById("close");
    close?.click();

    this.participantService.addParticipant(event[0],idprofil,idstructure,idpays).subscribe((resultat)=>{
        console.log(resultat);
        this.participants.unshift(resultat.object);
      },
      (error)=>{
        console.log(error.status)
      }
    );

  }



  delete(idParticipant:any){
    var result=confirm("Do you really want to delete this participant ?");
    if(result){
      this.participantService.deleteParticipant(idParticipant).subscribe(
        () => this.participants = this.participants.filter(e => e.idParticipant != idParticipant),
      );}
    console.log(idParticipant);
  }


  update(participant:any, i:any){
    this.showEdit=true;
    this.participant=participant;
    this.index=i;
  }

  updateParticipant(event:any){
    this.showEdit=false;

    let close=document.getElementById("close");
    close?.click();

    let idprofil=event[1].idProfil;
    let idstructure=event[2].idStructure;
    let idpays=1;
    if(event[3].idPays!=null) idpays=event[3].idPays;

    event[0].idParticipant=this.participant.idParticipant;
    this.participantService.updateParticipant(event[0],idprofil,idstructure,idpays).subscribe((result)=>
    { this.participants[this.index]=result.object;

    },
      (error)=>{
        console.log(error.status)
      }
    );

  }

}
