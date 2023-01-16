import { Component } from '@angular/core';
import {Trajet} from "../../model/Trajet";
import {Router} from "@angular/router";

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {

  name: String="";
  email:String="";
  constructor(private router:Router){}


  onSinscrire() {
    this.router.navigate(["/inscription"],{state:{nom:this.name,email:this.email}})
  }
}
