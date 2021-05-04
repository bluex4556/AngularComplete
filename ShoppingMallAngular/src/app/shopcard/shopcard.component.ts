import { Component, Input, OnInit } from '@angular/core';
import { Shop } from '../models/Shop';

@Component({
  selector: 'app-shopcard',
  templateUrl: './shopcard.component.html',
  styleUrls: ['./shopcard.component.css']
})
export class ShopcardComponent implements OnInit {

  @Input() shop!:Shop;
  @Input() manager!:boolean;

  constructor() { 

  }

  ngOnInit(): void {
  }

}
