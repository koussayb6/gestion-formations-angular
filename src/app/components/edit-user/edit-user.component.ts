import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Domaine} from "../../models/Domaine";
import {User} from "../../models/User";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  @Input() user:User=new User();
  @Output() notif= new EventEmitter<User>();
  types=["NATIONAL","INTERNATIONAL"];
  constructor() { }

  ngOnInit(): void {
  }
  sendDataToParent(f:User){
    this.notif.emit(f);
  }

}
