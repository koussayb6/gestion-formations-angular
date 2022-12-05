import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "./services/token-storage.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  username?: string;
  currentRoute:any;
  constructor(private router:Router,  private tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {

    if(this.tokenStorageService.getToken()){
      this.isLoggedIn = true;
      console.log(this.isLoggedIn);
    }else {this.router.navigate(['./login']);
      console.log(this.isLoggedIn);
    }

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        console.log(e.url);
        this.currentRoute=e.url;
      }
    });


    if (this.isLoggedIn) {

      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');
      this.username = user.username;
    }
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
