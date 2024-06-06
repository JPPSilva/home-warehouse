import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { Product } from 'src/app/interface/productInterface';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})

export class WarehouseComponent {

  /* Form Management */
  formStatus: boolean = false

  /* Test Storage Array */
  storageArray = [{ 'id': 1, 'name': "Arroz", 'quantity': 2 }]

  /* Form Model */
  addForm = new FormGroup({
    name: new FormControl(),
    quantity: new FormControl(),
  })

  ngOnInit() {

  }

  /* Open Form */
  openForm() {
    this.formStatus = true
  }

  /* Close Form */
  closeForm() {
    this.formStatus = false
  }

  /* Create Product */
  createProduct() {
    this.getLastId()
    let model = new Product(this.getLastId(), this.addForm.controls.name.value, this.addForm.controls.quantity.value)
    this.storageArray.push(model)
    this.addForm.reset()
    this.closeForm()
  }

  /* Remove 1 product form the quantity */
  remove(item: any) {
    let removeOne = item.quantity - 1
    for (let i = 0; i < this.storageArray.length; i++) {
      if(this.storageArray[i].id == item.id){
        this.storageArray[i].quantity = removeOne
      }
    }
  }

  /* Delete the product from the list */
  delete(item: any) {
    /* API WILL DO THE JOB */
  }

  /* Handle last id */
  getLastId() {
    let last: any = this.storageArray[this.storageArray.length - 1];
    return last.id + 1
  }
}
