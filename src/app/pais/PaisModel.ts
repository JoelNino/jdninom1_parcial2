export class PaisModel {
  id: number;
  name: string;
  formation_year: number;
  official_year: number;
  capital: string;


  constructor(
    id: number,
    name: string,
    formation_year: number,
    official_year: number,
    capital: string,


  ) {
    this.id =id;
    this.name = name;
    this.formation_year = formation_year;
    this.official_year = official_year;
    this.capital = capital;

  }

}
