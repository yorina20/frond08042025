import { Component, inject } from '@angular/core';
import {MatDialogTitle,MatDialogContent,MatDialogRef,
  MatDialogModule, MAT_DIALOG_DATA} from'@angular/material/dialog';
import { MatInput, MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder,FormGroup,Validators,
  ReactiveFormsModule} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { ProductoService } from '../../service/producto.service';

@Component({
  selector: 'app-product-dialog',
  imports: [MatDialogTitle,MatDialogContent,MatInputModule,
    MatDialogModule,MatFormFieldModule,MatButton,
    ReactiveFormsModule],
  templateUrl: './product-dialog.component.html',
})
export class ProductDialogComponent {
  data =inject(MAT_DIALOG_DATA);
  productForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    private dialogRef:MatDialogRef<ProductDialogComponent>,
    private productService:ProductoService
  ){
    this.productForm = this.fb.group(
      {
    name:['', Validators.required],
    price:['',Validators.required],
    description:['',Validators.minLength(10)],
    imageUrl:[''],
    isOferta:[false],
    porcentajeOfert:[0],

      }
    );
  }
   onSubmit(){
    if ( this.productForm.valid){
      const newProduct={
        id:Date.now(),
        ...this.productForm.value,
      };
      this.productService.addProduct(newProduct);
      this.dialogRef.close(newProduct);
    }
   }
   onCancel(){
    this.dialogRef.close();
   }
}
