import { Component, OnInit } from '@angular/core';
import {Domaine} from "../../models/Domaine";
import {DomaineService} from "../../services/domaine.service";
import {TokenStorageService} from "../../services/token-storage.service";

@Component({
  selector: 'app-list-domaine',
  templateUrl: './list-domaine.component.html',
  styleUrls: ['./list-domaine.component.css']
})
export class ListDomaineComponent implements OnInit {
  domaines: Domaine[];
  loggedIn:boolean=false;
  showEdit:boolean=false;
  domaine:Domaine;
  index:any;

  constructor(private domaineService: DomaineService, private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.domaineService.getAll().subscribe(
      (result) => {
        this.domaines = result;
      }
    )
    if(this.tokenStorage.getToken()){
      this.loggedIn=true;
    }
  }


    addDomaine(event:any){
      let close=document.getElementById("close");
      close?.click();

      this.domaineService.addDomaine(event).subscribe((resultat)=>{
          console.log(resultat);
          this.domaines.unshift(resultat.object);

        },
        (error)=>{
          console.log(error.status)
        }
      );

    }



    delete(idDomaine:any){
      var result=confirm("Do you really want to delete this domain ?");
      if(result){
        this.domaineService.deleteDomaine(idDomaine).subscribe(
          () => this.domaines = this.domaines.filter(e => e.idDomaine != idDomaine),
        );}
      console.log(idDomaine);
    }


    update(domaine:any, i:any){
      this.showEdit=true;
      this.domaine=domaine;
      this.index=i;
    }

    updateDomaine(event:Domaine){
      let close=document.getElementById("close");
      close?.click();
      event.idDomaine=this.domaine.idDomaine;
      this.domaineService.updateDomaine(event).subscribe((result)=>
      { this.domaines[this.index]=result.object;

      });

      this.showEdit=false;
    }


}
