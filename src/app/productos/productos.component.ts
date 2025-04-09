import { ChangeDetectionStrategy, Component } from '@angular/core';

type Product ={
  name:string;
  price:number;
  imageUrl:string;
  description:string;
  isOfert:boolean;
  porcentajeOferta:number;
}
@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductosComponent {
  productos:Product[]=[
    {
      name:'laptop',
      price:125,
      imageUrl:'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      description:'Core I5',
      isOfert:true,
      porcentajeOferta:0.5
    },
    {
      name:'impresora',
      price:2229,
      imageUrl:'https://images.pexels.com/photos/3831873/pexels-photo-3831873.jpeg?auto=compress&cs=tinysrgb&w=600',
      description:'Core I5',
      isOfert:false,
      porcentajeOferta:0.12
    },
  ]
  }
 
