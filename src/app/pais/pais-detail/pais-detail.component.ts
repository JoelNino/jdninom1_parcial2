import { Component, Input, OnInit } from '@angular/core';
import { PaisDetail } from '../pais-detail';

@Component({
  selector: 'app-pais-detail',
  standalone: false,
  templateUrl: './pais-detail.component.html',
  styleUrls: ['./pais-detail.component.css']
})
export class PaisDetailComponent implements OnInit {

  @Input() paisDetail!: PaisDetail;
  constructor() { }

  ngOnInit() {
  }

}
