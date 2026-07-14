import { Component, Input, } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() productdata:any;

  constructor(private router: Router) {}

// ViewMore() {

//   this.router.navigate(['/product-details'], {

//     queryParams: {

//       id: this.productdata.id,

//       title: this.productdata.title,

//       image: this.productdata.image,

//       description: this.productdata.description,

//       price: this.productdata.price,

//       category: this.productdata.category

//     }

//   });

// }

}
