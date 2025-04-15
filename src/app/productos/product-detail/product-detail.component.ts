import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { Product } from '../productos.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ProductoService],
})
export class ProductDetailComponent implements OnInit{ 
  productId:number = 0;
  product:Product | undefined

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productService:ProductoService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.productId = +params['id'];
      this.product = this.productService.getProductoPorId(this.productId);
      console.log(this.product)
    })
  }
}
