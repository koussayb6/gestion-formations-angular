import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {ListDomaineComponent} from "./components/list-domaine/list-domaine.component";
import {ListPaysComponent} from "./components/list-pays/list-pays.component";
import {ListParticipantComponent} from "./components/list-participant/list-participant.component";
import {ListCourseSessionComponent} from "./components/list-course-session/list-course-session.component";
import {ListProfilComponent} from "./components/list-profil/list-profil.component";
import {ListTrainerComponent} from "./components/list-trainer/list-trainer.component";
import {ListFormationComponent} from "./components/list-formation/list-formation.component";
import {ListStructureComponent} from "./components/list-structure/list-structure.component";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AuthGuard} from "./auth.guard";
import {ListUserComponent} from "./components/list-user/list-user.component";

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path: 'profile', component: ProfileComponent,canActivate:[AuthGuard]},
  {path: 'user', component: ListUserComponent,canActivate:[AuthGuard],data:{role: 'ROLE_ADMIN'}},
  {path:'domaine', component:ListDomaineComponent,canActivate:[AuthGuard],data:{role: 'ROLE_ADMIN'}},
  {path:'pays', component:ListPaysComponent,canActivate:[AuthGuard],data:{role: 'ROLE_ADMIN'}},
  {path:'participant', component:ListParticipantComponent,canActivate:[AuthGuard],data:{role: 'ROLE_USER'}},
  {path:'courseSession', component:ListCourseSessionComponent,canActivate:[AuthGuard],data:{role: 'ROLE_USER'}},
  {path:'profil', component: ListProfilComponent,canActivate:[AuthGuard],data:{role: 'ROLE_ADMIN'}},
  {path:'trainer', component: ListTrainerComponent,canActivate:[AuthGuard],data:{role: 'ROLE_USER'}},
  {path:'course', component: ListFormationComponent,canActivate:[AuthGuard],data:{role: 'ROLE_USER'}},
  {path:'structure', component: ListStructureComponent,canActivate:[AuthGuard],data:{role: 'ROLE_ADMIN'}},
  {path:'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
