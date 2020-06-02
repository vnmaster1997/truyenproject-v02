import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
@Input() cartItems: any
  constructor() { }

  ngOnInit(): void {
  }

}
