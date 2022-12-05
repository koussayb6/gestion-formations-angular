import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Domaine} from "../../models/Domaine";
import {Profil} from "../../models/Profil";

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  @Input() profil:Profil=new Profil();
  @Output() notif= new EventEmitter<Profil>();
  constructor() { }

  ngOnInit(): void {
  }
  sendDataToParent(f:Profil){
    this.notif.emit(f);
  }

}
