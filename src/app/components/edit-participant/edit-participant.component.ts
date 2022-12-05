import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Participant} from "../../models/Participant";
import {Structure} from "../../models/Structure";
import {Profil} from "../../models/Profil";
import {Pays} from "../../models/Pays";
import {StructureService} from "../../services/structure.service";
import {ProfilService} from "../../services/profil.service";
import {PaysService} from "../../services/pays.service";

@Component({
  selector: 'app-edit-participant',
  templateUrl: './edit-participant.component.html',
  styleUrls: ['./edit-participant.component.css']
})
export class EditParticipantComponent implements OnInit {
  @Input() participant:Participant=new Participant();
  @Output() notif= new EventEmitter<any>();
  types=["NATIONAL","INTERNATIONAL"];
  structures:Structure[];
  structure:Structure;
  profils:Profil[];
  profil:Profil;
  listpays:Pays[];
  pays:Pays;
  emission:any[]=[];

  constructor(private profilService: ProfilService,private structureService: StructureService,private paysService: PaysService) { }

  ngOnInit(): void {
    this.profilService.getAll().subscribe((result)=>{
      this.profils=result;
    })

    this.structureService.getAll().subscribe((result)=>{
      this.structures=result;
    })

    this.paysService.getAll().subscribe((result)=>{
      this.listpays=result;
    })
  }
  setProfil(event:any){
    this.profil=event;
  }
  setStructure(event:any){
    this.structure=event;
  }

  setPays(event:any){
    this.pays=event;
  }
  sendDataToParent(f:any){
    this.emission.push(f);
    this.emission.push(this.profil);
    this.emission.push(this.structure);
    this.emission.push(this.pays);
    this.notif.emit(this.emission);
  }
}
