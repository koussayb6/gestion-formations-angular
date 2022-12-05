import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Domaine} from "../../models/Domaine";
import {Pays} from "../../models/Pays";

@Component({
  selector: 'app-edit-pays',
  templateUrl: './edit-pays.component.html',
  styleUrls: ['./edit-pays.component.css']
})
export class EditPaysComponent implements OnInit {
  @Input() pays:Pays=new Pays();
  @Output() notif= new EventEmitter<Pays>();
  constructor() { }

  ngOnInit(): void {
  }
  sendDataToParent(f:Pays){
    this.notif.emit(f);
  }

}
