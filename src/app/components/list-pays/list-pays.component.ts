import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {Pays} from "../../models/Pays";
import {PaysService} from "../../services/pays.service";

@Component({
  selector: 'app-list-pays',
  templateUrl: './list-pays.component.html',
  styleUrls: ['./list-pays.component.css']
})
export class ListPaysComponent implements OnInit {

  listpays: Pays[];
  loggedIn:boolean=true;
  showEdit:boolean=false;
  pays:Pays;
  index:any;

  constructor(private paysService: PaysService, private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.paysService.getAll().subscribe(
      (result) => {
        this.listpays = result;
      }
    )
    if(this.tokenStorage.getToken()){
      this.loggedIn=true;
    }
  }


  addPays(event:any){
    let close=document.getElementById("close");
    close?.click();

    this.paysService.addPays(event).subscribe((resultat)=>{
        console.log(resultat);
        this.listpays.unshift(resultat.object);

      },
      (error)=>{
        console.log(error.status)
      }
    );

  }

  delete(idPays:any){
    var result=confirm("Do you really want to delete this domain ?");
    if(result){
      this.paysService.deletePays(idPays).subscribe(
        () => this.listpays = this.listpays.filter(e => e.idPays != idPays),
      );}

  }


  update(pays:any, i:any){
    this.showEdit=true;
    this.pays=pays;
    this.index=i;
  }

  updatePays(event:Pays){
    let close=document.getElementById("close");
    close?.click();
    event.idPays=this.pays.idPays;
    this.paysService.updatePays(event).subscribe((result)=>
    { this.listpays[this.index]=result.object;

    });

    this.showEdit=false;
  }

}
