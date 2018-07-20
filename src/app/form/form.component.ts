import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule,Validators,FormGroup,FormBuilder, FormGroupName} from '@angular/forms';
import { PriceValidator } from './priceValidator';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   rform: FormGroup;
  constructor(private fb:FormBuilder) {
    this.rform = fb.group({
      "name":['',[Validators.required,Validators.minLength(3),Validators.pattern('^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$')]],
      "price":['',[Validators.required,Validators.min(4000),PriceValidator]],
      "shipping":['',[Validators.required,Validators.min(100)]]
    })
   }
   
  ngOnInit() {
  }

}
