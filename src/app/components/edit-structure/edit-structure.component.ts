import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Domaine} from "../../models/Domaine";
import {Structure} from "../../models/Structure";

@Component({
  selector: 'app-edit-structure',
  templateUrl: './edit-structure.component.html',
  styleUrls: ['./edit-structure.component.css']
})
export class EditStructureComponent implements OnInit {

  @Input() structure:Structure=new Structure();
  @Output() notif= new EventEmitter<Structure>();
  constructor() { }

  ngOnInit(): void {
  }
  sendDataToParent(f:Structure){
    this.notif.emit(f);
  }

}
