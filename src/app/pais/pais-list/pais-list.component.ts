import { Component, OnInit } from '@angular/core';
import { PaisDetail } from '../pais-detail';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-pais-list',
  standalone: false,
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})
export class PaisListComponent implements OnInit {

  paises: PaisDetail[] = [];
  selected: Boolean = false;
  selectedPais!: PaisDetail;
  paisMasAntiguoNombre: string = '';
  paisMasAntiguoEdad: number = 0;
  paisMasAntiguoCreado: number = 0;

  constructor(private paisService: PaisService) { }

  getPaises(): void {
    this.paisService.getPaises().subscribe((data) => {
      this.paises = data;
      this.calcularPaisMasAntiguo();
  });
}


    calcularPaisMasAntiguo(): void {
    const anioActual = 2025;
    let paisAntiguo = this.paises[0];

    for (let pais of this.paises) {
      if (pais.formation_year < paisAntiguo.formation_year) {
        paisAntiguo = pais;
      }
    }

    this.paisMasAntiguoNombre = paisAntiguo.name;
    this.paisMasAntiguoEdad = anioActual - paisAntiguo.formation_year;
    this.paisMasAntiguoCreado = paisAntiguo.formation_year
  }

   onSelected(pais: PaisDetail): void {
    this.selected = true;
    this.selectedPais = pais;
  }


  ngOnInit() {
    this.getPaises();
  }

}
