import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  showThisRoute = false;
  authSubscription : Subscription;
  @Output() onToggleEmit = new EventEmitter<void>();

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(e =>{
      this.showThisRoute = e;
    })
  }
  headerToggle(){
    this.onToggleEmit.emit()
  }
  ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }
  logoutUser(){
    this.authService.logout();
  }
}
