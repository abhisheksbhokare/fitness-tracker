import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  showThisRoute = false;
  authSubscription : Subscription;
  @Output() onToggleEmit = new EventEmitter<void>();

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(e =>{
      this.showThisRoute = e;
    })
  }
  closeSidebar(){
    this.onToggleEmit.emit()
  }
  logoutUser(){
    this.authService.logout();
    this.closeSidebar();
  }

}
