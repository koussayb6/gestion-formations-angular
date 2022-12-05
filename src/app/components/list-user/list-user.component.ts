import { Component, OnInit } from '@angular/core';
import {Domaine} from "../../models/Domaine";
import {DomaineService} from "../../services/domaine.service";
import {TokenStorageService} from "../../services/token-storage.service";
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: User[];
  loggedIn: boolean = false;
  showEdit: boolean = false;
  user: User;
  index: any;

  constructor(private authService: AuthService,private userService: UserService, private tokenStorage: TokenStorageService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      (result) => {
        this.users = result;
      }
    )
    if (this.tokenStorage.getToken()) {
      this.loggedIn = true;
    }
  }


  delete(idUser: any) {
    var result = confirm("Do you really want to delete this user ?");
    if (result) {
      this.userService.deleteUser(idUser).subscribe(
        () => this.users = this.users.filter(e => e.id != idUser),
      );
    }
    console.log(idUser);
  }


  update(user: any, i: any) {
    this.showEdit = true;
    this.user = user;
    this.index = i;
  }

  updateUser(event: User) {
    this.showEdit = false;

    let close = document.getElementById("close");
    close?.click();
    event.id = this.user.id;
    this.userService.updateUser(event).subscribe((result) => {
      this.users[this.index] = result.object;

    });
  }
  addUser(event:any){
    let close=document.getElementById("close");
    close?.click();

    this.authService.register(event.username,event.email, event.password).subscribe((resultat)=>{
        console.log(resultat);
        this.users.push(resultat.object);

      },
      (error)=>{
        console.log(error.status)
      }
    );

  }

}

