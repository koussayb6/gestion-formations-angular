import { Component, OnInit } from '@angular/core';

import {TokenStorageService} from "../../services/token-storage.service";
import {Trainer} from "../../models/Trainer";
import {trainerService} from "../../services/trainer.service";

@Component({
  selector: 'app-list-trainer',
  templateUrl: './list-trainer.component.html',
  styleUrls: ['./list-trainer.component.css']
})
export class ListTrainerComponent implements OnInit {

  trainers: Trainer[];
  loggedIn:boolean=true;
  showEdit:boolean=false;
  trainer:Trainer;
  index:any;

  constructor(private trainerService : trainerService, private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.trainerService.getAll().subscribe(
      (result) => {
        this.trainers = result;
      }
    )
    if(this.tokenStorage.getToken()){
      this.loggedIn=true;
    }
  }


  addTrainer(event:any){
    let idstructure=event[1].idStructure;
    let close=document.getElementById("close");
    close?.click();

    this.trainerService.addTrainer(event[0],idstructure).subscribe((resultat)=>{
        console.log(resultat);
        this.trainers.unshift(resultat.object);

      },
      (error)=>{
        console.log(error.status)
      }
    );

  }



  delete(idTrainer:any){
    var result=confirm("Do you really want to delete this Trainer ?");
    if(result){
      this.trainerService.deleteTrainer(idTrainer).subscribe(
        () => this.trainers = this.trainers.filter(e => e.idTrainer != idTrainer),
      );}
    console.log(idTrainer);
  }


  update(trainer:any, i:any){
    this.showEdit=true;
    this.trainer=trainer;
    this.index=i;
  }

  updateTrainer(event:any){
    this.showEdit=false;

    let close=document.getElementById("close");
    close?.click();
    let idstructure=event[1].idStructure;

    event[0].idTrainer=this.trainer.idTrainer;
    this.trainerService.updateTrainer(event[0],idstructure).subscribe((result)=>{
        this.trainers[this.index]=result.object;
      },
      (error)=>{
        console.log(error.status)
      }
    );


  }


}

