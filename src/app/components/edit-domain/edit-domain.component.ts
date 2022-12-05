import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Domaine} from "../../models/Domaine";

@Component({
  selector: 'app-edit-domain',
  templateUrl: './edit-domain.component.html',
  styleUrls: ['./edit-domain.component.css']
})
export class EditDomainComponent implements OnInit {
  @Input() domaine:Domaine=new Domaine();
  @Output() notif= new EventEmitter<Domaine>();
  constructor() { }

  ngOnInit(): void {
  }
  sendDataToParent(f:Domaine){
    this.notif.emit(f);
  }
}
