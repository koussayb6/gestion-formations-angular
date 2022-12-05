import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {authInterceptorProviders} from "./_helpers/auth.interceptor";
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ListDomaineComponent } from './components/list-domaine/list-domaine.component';
import { EditDomainComponent } from './components/edit-domain/edit-domain.component';
import { ListPaysComponent } from './components/list-pays/list-pays.component';
import { EditPaysComponent } from './components/edit-pays/edit-pays.component';
import { ListParticipantComponent } from './components/list-participant/list-participant.component';
import { EditParticipantComponent } from './components/edit-participant/edit-participant.component';
import { ListCourseSessionComponent } from './components/list-course-session/list-course-session.component';
import { EditCourseSessionComponent } from './components/edit-course-session/edit-course-session.component';
import { ListStructureComponent } from './components/list-structure/list-structure.component';
import { EditStructureComponent } from './components/edit-structure/edit-structure.component';
import {ListProfilComponent} from "./components/list-profil/list-profil.component";
import {ListFormationComponent} from "./components/list-formation/list-formation.component";
import {ListTrainerComponent} from "./components/list-trainer/list-trainer.component";
import {EditTrainerComponent} from "./components/edit-trainer/edit-trainer.component";
import {EditFormationComponent} from "./components/edit-formation/edit-formation.component";
import {EditProfilComponent} from "./components/edit-profil/edit-profil.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    ListDomaineComponent,
    EditDomainComponent,
    ListPaysComponent,
    EditPaysComponent,
    ListParticipantComponent,
    EditParticipantComponent,
    ListCourseSessionComponent,
    EditCourseSessionComponent,
    ListStructureComponent,
    EditStructureComponent,
    ListProfilComponent,
    EditProfilComponent,
    ListFormationComponent,
    EditFormationComponent,
    ListTrainerComponent,
    EditTrainerComponent,
    DashboardComponent,
    ListUserComponent,
    EditUserComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
