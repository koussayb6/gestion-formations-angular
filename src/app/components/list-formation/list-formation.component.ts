import { Component, OnInit } from '@angular/core';

import {TokenStorageService} from "../../services/token-storage.service";
import {Formation} from "../../models/Formation";
import {FormationService} from "../../services/formation.service";

@Component({
  selector: 'app-list-formation',
  templateUrl: './list-formation.component.html',
  styleUrls: ['./list-formation.component.css']
})
export class ListFormationComponent implements OnInit {

  formations: Formation[];
  loggedIn:boolean=true;
  showEdit:boolean=false;
  formation:Formation;
  index:any;

  constructor(private formationService: FormationService, private tokenStorage: TokenStorageService) {}


  ngOnInit(): void {
    this.formationService.getAll().subscribe(
      (result) => {
        this.formations = result;
      }
    )
    if(this.tokenStorage.getToken()){
      this.loggedIn=true;
    }
  }


  addFormation(event:any){
    let idDomaine=event[1].idDomaine;
    let close=document.getElementById("close");
    close?.click();

    this.formationService.addFormation(event[0],idDomaine).subscribe((resultat)=>{
        console.log(resultat);
        this.formations.unshift(resultat.object);

      },
      (error)=>{
        console.log(error.status)
      }
    );

  }



  delete(idFormation:any){
    var result=confirm("Do you really want to delete this domain ?");
    if(result){
      this.formationService.deleteFormation(idFormation).subscribe(
        () => this.formations = this.formations.filter(e => e.idCourse !=idFormation),
      );}
    console.log(idFormation);
  }


  update(formation:any, i:any){
    this.showEdit=true;
    this.formation=formation;
    this.index=i;
  }

  updateFormation(event:any){
    let close=document.getElementById("close");
    close?.click();
    let idDomaine=event[1].idDomaine;

    event[0].idCourse=this.formation.idCourse;
    this.formationService.updateFormation(event[0],idDomaine).subscribe((result)=>
    { this.formations[this.index]=result.object;
    });

    this.showEdit=false;
  }


}
