import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {TrajetService} from "../../service/trajet.service";
import {Offre} from "../../model/Offre";
import {Router} from "@angular/router";

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class OffreComponent {



  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  offre:Offre= {
    dateDepart: new Date(),
    villeDepart: "",
    villeDestination: "",
    isOffer: true,
    nbpersonnes: 0,
    prix: 0,
  }


  constructor(  private router: Router ,private _formBuilder: FormBuilder,private trajetService:TrajetService) {
  }

  onClickConfirmer() {
     let offer =this.trajetService.addOffre(this.offre).subscribe();
      console.log(offer);
      this.router.navigate(['/acceuil']);
  }
}
