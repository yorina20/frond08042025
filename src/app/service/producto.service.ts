import { Injectable } from '@angular/core';
import { Product } from '../productos/productos.component';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos:Product[]=[
    {
    id:1,
    name:'Laptop',
    price:24,
    imageUrl:'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:"Core I 5",
    isOferta:true,
    porcentajeOfert:0.5,
    finalPrice:0,
    },
    {
      id:2,
      name:'Impresora',
      price:2500,
      imageUrl:'https://images.pexels.com/photos/4792283/pexels-photo-4792283.jpeg?auto=compress&cs=tinysrgb&w=400',
      description:"Core I 5",
      isOferta:true,
      porcentajeOfert:0.12,
      finalPrice:0,
    },
    {
      id:3,
      name:'Impresora',
      price:2500,
      imageUrl:'https://images.pexels.com/photos/4792283/pexels-photo-4792283.jpeg?auto=compress&cs=tinysrgb&w=400',
      description:"Core I 5",
      isOferta:false,
      porcentajeOfert:0.12,
      finalPrice:0,
    },
  ]

  constructor() {
    this.calcularFinalPrice();
   }

   calcularFinalPrice(){
    this.productos = this.productos.map((p:Product)=>{
      if(p.isOferta){
        const descuento = p.price * p.porcentajeOfert;
        p.finalPrice= p.price - descuento;
        return p;
      }
      p.finalPrice=p.price;
      return p;
    });
   }

   getProductos(){
    this.calcularFinalPrice();
    return this.productos; 
   }

  getProductoPorId(id:number){
    return this.productos.find((producto)=>producto.id === id)
  }

}
