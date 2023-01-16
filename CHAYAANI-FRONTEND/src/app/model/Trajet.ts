export interface Trajet {
  nbpersonnes?: number;
  isOffer?:boolean,
  dateDepart:Date,
  price:number,
profile:{
  age: number;
  Name:string,
  gender:boolean,
  phoneNumber?:number
},
  depart:string,
  destination:string
}
