import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {

  @Output() newTrainingEmitter = new EventEmitter<void>()

  exercises = [{
    value:'crunches',
    viewValue:'Crunches'
  },
  {
    value:'pushups',
    viewValue:'Push Ups'
  },
  {
    value:'sidelunges',
    viewValue:'Side Lunges'
  },
  {
    value:'burpees',
    viewValue:'Burpees'
  }]

  constructor() { }

  ngOnInit(): void {
  }

  startTraining(){
this.newTrainingEmitter.emit()
  }

}
