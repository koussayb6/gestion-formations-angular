import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {StructureService} from "../../services/structure.service";
import {Structure} from "../../models/Structure";

@Component({
  selector: 'app-list-structure',
  templateUrl: './list-structure.component.html',
  styleUrls: ['./list-structure.component.css']
})
export class ListStructureComponent implements OnInit {
  structures: Structure[];
  loggedIn:boolean=true;
  showEdit:boolean=false;
  structure:Structure;
  index:any;

  constructor(private structureService: StructureService, private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.structureService.getAll().subscribe(
      (result) => {
        this.structures= result;
      }
    )
    if(this.tokenStorage.getToken()){
      this.loggedIn=true;
    }
  }


  addStructure(event:any){
    let close=document.getElementById("close");
    close?.click();

    this.structureService.addStructure(event).subscribe((resultat)=>{
        console.log(resultat);
        this.structures.unshift(resultat.object);

      },
      (error)=>{
        console.log(error.status)
      }
    );

  }



  delete(idStructure:any){
    var result=confirm("Do you really want to delete this domain ?");
    if(result){
      this.structureService.deleteStructure(idStructure).subscribe(
        () => this.structures = this.structures.filter(e => e.idStructure != idStructure),
      );}
    console.log(idStructure);
  }


  update(structure:any, i:any){
    this.showEdit=true;
    this.structure=structure;
    this.index=i;
  }

  updateStructure(event:Structure){
    let close=document.getElementById("close");
    close?.click();
    event.idStructure=this.structure.idStructure;
    console.log(this.structure.idStructure);
    this.structureService.updateStructure(event).subscribe((result)=>
    { this.structures[this.index]=result.object;

    });

    this.showEdit=false;
  }

}
