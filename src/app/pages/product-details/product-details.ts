import { ChangeDetectorRef, Component } from '@angular/core';
import { ApiService } from '../../api-service';
import { ActivatedRoute } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  singleProduct:any;
  id: any;
  constructor(private api:ApiService,private cdr:ChangeDetectorRef,private ar:ActivatedRoute){}

  ngOnInit(){
    this.id=this.ar.snapshot.params['id'];
    this.api.getProductDetails(this.id).subscribe((res:any)=>{
      this.singleProduct=res;
      this.cdr.detectChanges();
    })

  }
}






// productdata = {
//     id: '',
//     title: '',
//     image: '',
//     description: '',
//     price: '',
//     category: '',
//   };

//   constructor(private route: ActivatedRoute) {

//     const product = this.route.snapshot.queryParamMap;

//     this.productdata = {

//       id: product.get('id') || '',

//       title: product.get('title') || 'Product Details',

//       image: product.get('image') || 'https://via.placeholder.com/400',

//       description: product.get('description') || 'No description available.',

//       price: product.get('price') || '0',

//       category: product.get('category') || 'General'

//     };

//   }