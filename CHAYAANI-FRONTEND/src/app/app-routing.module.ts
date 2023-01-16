import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {AcceuilComponent} from "./component/acceuil/acceuil.component";
import {InscriptionComponent} from "./component/inscription/inscription.component";
import {OffreComponent} from "./component/offre/offre.component";
import {LoginComponent} from "./component/login/login.component";


const routes:Routes=[
  {path:'acceuil',component: AcceuilComponent},
  {path:'inscription',component: InscriptionComponent},
  {path:'login',component: LoginComponent},

  {path:'offre',component:OffreComponent},
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
