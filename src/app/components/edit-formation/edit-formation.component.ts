import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Formation} from "../../models/Formation";
import {Domaine} from "../../models/Domaine";
import {DomaineService} from "../../services/domaine.service";

@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.css']
})
export class EditFormationComponent implements OnInit {

  @Input() formation:Formation=new Formation();
  @Output() notif= new EventEmitter<any[]>();
  domaines:Domaine[];
  domaine:Domaine;
  emission:any[]=[];

  constructor(private domaineService: DomaineService) { }

  ngOnInit(): void {
    this.domaineService.getAll().subscribe((result)=>{
      this.domaines=result;
    })
  }

  setDomaine(event:any){
    this.domaine=event;
  }

  sendDataToParent(f:Formation){
    this.emission.push(f);
    this.emission.push(this.domaine);
    this.notif.emit(this.emission);
  }
}
