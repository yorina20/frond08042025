import { ChangeDetectionStrategy, Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe, NgClass, PercentPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../service/producto.service';

export type Product ={
  id:number,
  name:string;
  price:number;
  imageUrl:string;
  description:string;
  isOferta:boolean;
  porcentajeOfert:number
  finalPrice:number
}
@Pipe({
  name: 'pipeText',
  standalone: true,
})
export class PipeText implements PipeTransform{
  transform(value: string) {
    return `${value.substring(0,50)}...`;
  }
} 

@Component({
  selector: 'app-productos',
  imports: [RouterLink, PipeText, PercentPipe, CurrencyPipe, NgClass],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
  providers:[ProductoService]
})
export class ProductosComponent implements OnInit{
  productos?:Product[];

  constructor(private readonly productoService:ProductoService){}
    ngOnInit() {
      this.productos = this.productoService.getProductos();
    }
  
}
