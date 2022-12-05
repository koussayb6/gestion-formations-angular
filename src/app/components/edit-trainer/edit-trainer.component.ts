import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Trainer} from "../../models/Trainer";
import {StructureService} from "../../services/structure.service";
import {Structure} from "../../models/Structure";

@Component({
  selector: 'app-edit-trainer',
  templateUrl: './edit-trainer.component.html',
  styleUrls: ['./edit-trainer.component.css']
})
export class EditTrainerComponent implements OnInit {

  @Input() trainer:Trainer=new Trainer();
  types = ["INTERNE","EXTERNE"]
  @Output() notif= new EventEmitter<any[]>();
  structures:Structure[];
  structure:Structure;
  emission:any[]=[];
  constructor(private structureService: StructureService) { }

  ngOnInit(): void {
    this.structureService.getAll().subscribe((result)=>{
      this.structures=result;
    })
  }
  setStructure(event:any){
    this.structure=event;
  }
  sendDataToParent(f:Trainer){
    this.emission.push(f);
    this.emission.push(this.structure);
    this.notif.emit(this.emission);
  }
}
