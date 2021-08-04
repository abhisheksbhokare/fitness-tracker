import { AuthData } from "./auth-data.model";
import { User } from "./user.mode";
import { Subject } from "rxjs";
import { Injectable } from '@angular/core'
import { Router } from "@angular/router";


@Injectable()
export class AuthService{
    private user : User;
    authChange = new Subject<boolean>();

    constructor(private router : Router){}

    registerUser(authData : AuthData){
        this.user = {
            email : authData.email,
            userId : Math.round(Math.random() * 10000).toString()
        }
        this.authSuccessful();
    }
    login(authData : AuthData){
        this.user = {
            email : authData.email,
            userId : Math.round(Math.random() * 10000).toString()
        }
        this.authSuccessful();
    }
    authSuccessful(){
        this.authChange.next(true);
        this.router.navigate(['/training'])
    }
    logout(){
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/logout'])
    }
    getUser(){
        return { ...this.user };
    }
    isAuth(){
        return this.user != null;
    }

}