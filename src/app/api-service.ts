import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn:'root',
})
export class ApiService {
    constructor(private http: HttpClient){}

    getAllProducts(){
        // DummyJSON returns { products: [...] } — normalize fields expected by the app
        return this.http.get("https://dummyjson.com/products").pipe(
            map((res: any) => (res.products || []).map((p: any) => ({
                ...p,
                image: p.thumbnail ?? (p.images && p.images[0]) ?? '',
                price: typeof p.price === 'number' ? '$' + p.price : p.price,
            })))
        );
    }
    getProductDetails(id:any){
        return this.http.get(`https://dummyjson.com/products/${id}`).pipe(
            map((p: any) => ({
                ...p,
                image: p.thumbnail ?? (p.images && p.images[0]) ?? '',
                price: typeof p.price === 'number' ? '$' + p.price : p.price,
            }))
        )
    }
}
