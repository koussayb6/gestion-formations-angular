import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isAdmin:boolean=false;
  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.isAdmin=this.tokenStorage.getUser().roles[0]=='ROLE_ADMIN';
  }

}
