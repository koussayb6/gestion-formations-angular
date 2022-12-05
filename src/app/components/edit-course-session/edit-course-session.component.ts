import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CourseSession} from "../../models/CourseSession";
import {Structure} from "../../models/Structure";
import {Trainer} from "../../models/Trainer";
import {Formation} from "../../models/Formation";
import {StructureService} from "../../services/structure.service";
import {trainerService} from "../../services/trainer.service";
import {FormationService} from "../../services/formation.service";

@Component({
  selector: 'app-edit-course-session',
  templateUrl: './edit-course-session.component.html',
  styleUrls: ['./edit-course-session.component.css']
})
export class EditCourseSessionComponent implements OnInit {

  @Input() courseSession:CourseSession=new CourseSession();
  @Output() notif= new EventEmitter<any[]>();
  structures:Structure[];
  structure:Structure;
  trainers:Trainer[];
  trainer:Trainer;
  courses:Formation[];
  course:Formation;
  emission:any[]=[];
  constructor(private structureService: StructureService,private trainerService: trainerService, private formationService: FormationService) { }

  ngOnInit(): void {
    this.structureService.getAll().subscribe((result)=>{
      this.structures=result;
    })

    this.trainerService.getAll().subscribe((result)=>{
      this.trainers=result;
    })

    this.formationService.getAll().subscribe((result)=>{
      this.courses=result;
    })
  }

  setStructure(event:any){
    this.structure=event;
  }

  setTrainer(event:any){
    this.trainer=event;
  }
  setCourse(event:any){
    this.course=event;
  }
  sendDataToParent(f:CourseSession){
    this.emission.push(f);
    this.emission.push(this.structure);
    this.emission.push(this.trainer);
    this.emission.push(this.course);
    this.notif.emit(this.emission);
  }
}
