import { PaisModel } from "./PaisModel";


export class PaisDetail extends PaisModel {
  description: string;
  flag: string;



   constructor(
    id: number,
    name: string,
    formation_year: number,
    official_year: number,
    capital: string,
    description: string,
    flag: string

  )

  {
    super(id, name, formation_year, official_year, capital);
    this.description = description;
    this.flag = flag;
  }
}
