import { ChangeDetectionStrategy, Component, inject, OnInit, Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe, NgClass, PercentPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductoService } from '../service/producto.service';
import { MatButton } from '@angular/material/button';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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
  imports: [RouterLink, PipeText, PercentPipe, CurrencyPipe,
     NgClass,MatButton],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
  providers:[ProductoService]
})
export class ProductosComponent implements OnInit{
  dialog =inject(MatDialog)
  productos?:Product[];

  constructor(private readonly productoService:ProductoService){}

  async ngOnInit(){
    console.log('...ngOnInit');
    this.productos = await this.productoService.getProductos();
  }
  
    openDialog(){
    const dialogRef=this.dialog.open(ProductDialogComponent,{data:{producto:"cerveza"}})
    dialogRef.afterClosed().subscribe((result)=>{
      console.log(`Resultado de Dialog`,result);
      
    })
}}
