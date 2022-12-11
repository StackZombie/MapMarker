import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company{
  companyName:string;
  catchPhrase:string;
  location:{
    lat:number;
    lng:number
  }
  color:string = 'orange';
  constructor(){
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat : parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent():string{
    return `<div><h1>Comapny Name is ${this.companyName} </h1> </h3>Company catch phrase is ${this.catchPhrase}</h3><div>`
  }
}