import { Component, OnInit } from '@angular/core';
import { Product, TopSelling } from './top-selling-data';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html',
  styleUrls: ['./top-selling.component.scss']
})
export class TopSellingComponent  implements OnInit {

  topSelling:Product[];

  constructor() { 

    this.topSelling=TopSelling;
  }

  ngOnInit(): void {
  }

}
