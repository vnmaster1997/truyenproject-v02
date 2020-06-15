import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { MessengerService } from '../../../../../shared/messenger.service';
import { CartService } from '../../../../../shared/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
      @Input() productCard: Product;
      @Input() addedToCard: boolean;

  constructor(private msg : MessengerService,private cartService: CartService) { }

  ngOnInit(): void {
  }

	handleAddToCart() {
    	this.cartService.addProductToCart(this.productCard).subscribe(() => {
      	this.msg.sendMsg(this.productCard)
      	this.addedToCard = true;
    	})
  	}

	/*handleMoveFromCart(){
		this.cartService.RemoveProductFromCart(this.productCard).subscribe(() => {
      	this.msg.sendMsg(this.productCard)
      	this.addedToCard = false;
    	})
	}*/

}
