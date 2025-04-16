import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { Product } from '../productos.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButton} from '@angular/material/button';

@Component({
  selector: 'app-product-detail',
  imports: [MatButton],
  templateUrl: './product-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ProductoService],
})
export class ProductDetailComponent implements OnInit{ 
  productId:number = 0;
  product:Product | undefined

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly productService:ProductoService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.productId = +params['id'];
      this.product = this.productService.getProductoPorId(this.productId);
      console.log(this.product)
    })
  }
  goBack():void{
    this.router.navigate(['/productos']);
  }
}
