import {Component} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    userName: String = "";
    pass: String = "";

    constructor(private authService: AuthService, private router:Router) {
    }

    onClickValider() {
        this.authService.getUserByUserName(this.userName)
            .subscribe((user) => {
                if(user) {

                    if (user.password === this.pass) {
                        console.log(" auth success")
                        this.router.navigate(['/acceuil'])

                    } else {
                        console.log("auth failure")
                    }
                }
                else{
                    console.log("no user")
                }

        })
    }

}
