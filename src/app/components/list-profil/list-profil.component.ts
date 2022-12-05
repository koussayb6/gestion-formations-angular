import {Domaine} from "../../models/Domaine";
import {TokenStorageService} from "../../services/token-storage.service";
import {Profil} from "../../models/Profil";
import {ProfilService} from "../../services/profil.service";
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.css']
})
export class ListProfilComponent implements OnInit {

  profils: Profil[];
  loggedIn:boolean=true;
  showEdit:boolean=false;
  profil: Profil;
  index:any;

  constructor(private profilService: ProfilService, private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.profilService.getAll().subscribe(
      (result) => {
        this.profils = result;
      }
    )
    if(this.tokenStorage.getToken()){
      this.loggedIn=true;
    }
  }


  addProfil(event:any){
    let close=document.getElementById("close");
    close?.click();

    this.profilService.addProfil(event).subscribe((resultat)=>{
        console.log(resultat);
        this.profils.unshift(resultat.object);

      },
      (error)=>{
        console.log(error.status)
      }
    );

  }



  delete(idProfil:any){
    var result=confirm("Do you really want to delete this domain ?");
    if(result){
      this.profilService.deleteProfil(idProfil).subscribe(
        () => this.profils = this.profils .filter(e => e.idProfil !=idProfil),
      );}
    console.log(idProfil);
  }


  update(profil:any, i:any){
    this.showEdit=true;
    this.profil=profil;
    this.index=i;
  }

  updateProfil(event:Profil){
    let close=document.getElementById("close");
    close?.click();
    event.idProfil=this.profil.idProfil;
    this.profilService.updateProfil(event).subscribe((result)=>
    { this.profils[this.index]=result.object;

    });

    this.showEdit=false;
  }


}

