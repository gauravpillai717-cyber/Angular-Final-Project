import { ChangeDetectorRef, Component } from '@angular/core';
import { Card } from "../../ui/card/card";
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api-service';

@Component({
  standalone: true,
  selector: 'app-products',
  imports: [Card, CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  data:any=[];
  constructor(private api: ApiService,private cdr:ChangeDetectorRef){}
  ngOnInit(){
    this.api.getAllProducts().subscribe((res:any)=>{
      this.data=res;
      this.cdr.detectChanges()
    });
  }
  trackById(index: number, item: any) {
    return item.id;
  }
  // data: any=[
  //   {
  //     id: 1,
  //     name: "Bluetooth Speaker",
  //     description: "Turn your space into the ultimate 'Hangout Zone' with 30 watts of pure audio.",
  //     price: '$399',
  //     image: "https://imgs.search.brave.com/5OkUqpSh7RgnY1mwNqaSXdAKPeLnz4U5TeR6uzH-jLM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0LzNG/WXd0Y0xSYXA3U3VM/Y2JLUlpRUlMuanBn"
  //   },
  //   {
  //     id: 2,
  //     name: "Smartwatch",
  //     description: "Samsung Galaxy Watch6 Classic (Black, 43mm) | Rotating Bezel | LTE | Monitor BP and ECG | Track Sleep | Track Health | Upto 40hrs Charge with Fast Charging | Galaxy Ecosystem | IP68 Rating",
  //     price: '$799',
  //     image: "https://imgs.search.brave.com/ojKvLmVKtFaNlzcpWYB6JYGiWvV61XkR7BSOZP866U8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA0/MDk4MjA2Mi9waG90/by90aGUtbW9kZWxz/LWZyb250aWVyLWFu/ZC1jbGFzc2ljLW9m/LXRoZS1uZXctc2Ft/c3VuZy1zbWFydHdh/dGNoLWdlYXItMy1j/YW4tYmUtc2Vlbi1k/dXJpbmctYS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9SHp4/dzBlaTZDcm9CTFR2/eHFaODVGX0h2SHp2/X0ZQbHVwNDRITHY5/TnlaZz0"
  //   },
  //   {
  //     id: 3,
  //     name: "Meta glass",
  //     description: "Ray-Ban Meta and Oakley Meta AI glasses. Discover new styles, built-in Meta AI, open-ear audio and camera for everyday life.",
  //     price: '$999',
  //     image: "https://imgs.search.brave.com/XM10zJ7GjLF5_XbLTSdCLYYhvypYfpVfrAy4lseaoyA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L3Yy/L3Q6MTgxLGw6MjEy/LGN3OjQ3MDYsY2g6/MjY0NyxxOjgwL3ha/YnNTbUpCbUU5bkpG/UFBINlNpVzYuanBn"
  //   }
  // ]
  
}
