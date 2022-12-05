import {Structure} from "./Structure";
import {Trainer} from "./Trainer";
import {Formation} from "./Formation";
import {Participant} from "./Participant";

export class CourseSession{
  idCourseSession: number;
  lieu: string;
  date_debut: Date;
  date_fin: Date;
  nb_participant: number;
  structure:Structure;
  trainer:Trainer;
  course:Formation;
  participants:Participant[];
}
