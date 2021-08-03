import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Output() onToggleEmit = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  closeSidebar(){
    this.onToggleEmit.emit()
  }

}
