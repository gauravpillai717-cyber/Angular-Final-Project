import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Contact } from './pages/contact/contact';
import { ProductDetails } from './pages/product-details/product-details';

export const routes: Routes = [
    {
        path:'', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path:'home', component: Home
    },
    {
        path:'product',component:Products
    },
    {
        path:'contact',component:Contact
    },
    {
        path:'product-details/:id',component:ProductDetails
    }
];
