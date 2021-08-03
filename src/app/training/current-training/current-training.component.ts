import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {

  progressVal = 0;
  buttonVal = 'START'
  timer;
  constructor() { }

  ngOnInit(): void {
    
  }

  startTimer(e){
    if(e.target.innerText == 'PAUSE'){
      clearInterval(this.timer);
      this.buttonVal = 'RESUME';
    }else if(e.target.innerText == 'RESUME'){
      this.timer = this.timerFunction();
      this.buttonVal = 'PAUSE';
    }else if(e.target.innerText == 'RESET'){
      clearInterval(this.timer);
      this.timer = this.timerFunction();
      this.buttonVal = 'PAUSE';
    }else{ 
      this.timer = this.timerFunction();
      this.buttonVal = 'PAUSE';
   }
  }
  timerFunction(){
    return setInterval(()=>{
      if(this.progressVal < 100){
        this.progressVal = this.progressVal + 1;
      }else{
        this.buttonVal = 'RESET';
      }
    },100);
  }
}
