import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  showCurrentTraining = false;

  constructor() { }

  ngOnInit(): void {
  }

  getTrainingInfo(){
    this.showCurrentTraining = true;
  }

}
