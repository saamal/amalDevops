import {Component, Inject, Input, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {User} from "../../model/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {



  user:User={username:"",
    firstname:"",
    lastname:"",
    email:"",
    cin:0,
    password:"",};

  constructor(private router: Router, private authService:AuthService) { }

  ngOnInit(): void {
  }
  newUser(user:User):void{
    this.authService.createUser(user).subscribe((user)=>console.log(user));
    this.router.navigate(['/acceuil']);
  }
}
