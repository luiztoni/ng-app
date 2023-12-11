import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {

    constructor(private router: Router) { }
    canActivate(): any {
        //this.router.navigate(['/auth']);
       // this.authService.isLoggedIn();
        return true;
    }
}