import { Component } from '@angular/core';
import { Accordion } from "../../ui/accordion/accordion";
import { Carousel } from "../../ui/carousel/carousel";

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [Accordion, Carousel],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
