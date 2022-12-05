import {Profil} from "./Profil";
import {Structure} from "./Structure";
import {Pays} from "./Pays";

export class Participant{
  idParticipant : number;
  fname : string;
  lname : string;
  email : string;
  tel : number;
  type : string;
  profil : Profil;
  structure : Structure;
  pays : Pays;
}
