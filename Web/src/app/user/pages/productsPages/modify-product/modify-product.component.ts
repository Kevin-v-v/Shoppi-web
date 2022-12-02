import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UserService } from '../../../../services/user.service';
import { categories } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent {

  previsualizacion: any
  data: any
  Response: any
  imagen = []
  isDisabled = false
  valImage = false
  categories = categories
  userProductsRoute = ["user/products"]


  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, public dialog: MatDialog, private userService: UserService, private sanitizer: DomSanitizer) {
    this.userService.getUserProduct(this.route.snapshot.paramMap.get('id')!).subscribe(
      res => {this.data = res.data},
      err => {this.router.navigate(this.userProductsRoute)},
      () => { 
        this.createProductForm.get("title")!.setValue(this.data.title);
        this.createProductForm.get("description")!.setValue(this.data.description);
      }
    )
  }

  categoriesControl = new FormControl<CategoriesProducts | null>(null, Validators.required);
  
  createProductForm = this.formBuilder.group({
    title:['', [ Validators.required]],
    description:['', [ Validators.required]]
  })

  noTitleValid(){ return this.createProductForm.controls.title.errors && this.createProductForm.controls.title.touched }
  noDescriptionValid(){ return this.createProductForm.controls.description.errors && this.createProductForm.controls.description.touched }

  capturarFile(event: any){
    const archivoCapturado = event.target.files[0]
    // this.extraerBase64(archivoCapturado).then((imagen: any) => {
    //   this.previsualizacion = imagen.base;
    //   console.log(imagen);
    // }
    //   )
    this.imagen = archivoCapturado
    this.valImage = true
  }

  // extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
  //   try {
  //     const unsafeImg = window.URL.createObjectURL($event);
  //     const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
  //     const reader = new FileReader();
  //     reader.readAsDataURL($event);
  //     reader.onload = () => {
  //       resolve({
  //         base: reader.result
  //       });
  //     };
  //     reader.onerror = error => {
  //       resolve({
  //         base: null
  //       });
  //     };

  //   } catch (e) {
  //     return null;
  //   }
  // })

  saveForm(){
    if ( this.createProductForm.invalid || this.categoriesControl.invalid){
      this.createProductForm.markAllAsTouched()
      this.categoriesControl.markAllAsTouched()
      return;
    }

    this.isDisabled = true
    const formularioDeDatos = new FormData();
    formularioDeDatos.append("post_id", this.data.id)
    formularioDeDatos.append("title", this.createProductForm.controls.title.value!.toString())
    formularioDeDatos.append("description", this.createProductForm.controls.description.value!.toString())
    formularioDeDatos.append("category", this.categoriesControl.value!.value.toString())

    this.userService.modifyUserProduct(formularioDeDatos, this.imagen).subscribe(
      res => {  this.Response = res;
                if (this.Response.body.success == false){
                  this.dialog.open(createProductDialog, { data: this.Response.body.msg});
                }
      },
      err => {this.dialog.open(createProductDialog, { data: "Error del servidor, inténtalo más tarde"}); },
      () => { this.isDisabled = false, this.router.navigate(this.userProductsRoute)}
    );
  }
  
}

@Component({
  selector: 'create-product-dialog',
  template: `<h1 mat-dialog-title>Error al crear el producto</h1>
              <div mat-dialog-content>{{data}}</div>`,
})
export class createProductDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ModifyProductComponent) {}
}

export interface CategoriesProducts {
  value:  string;
}