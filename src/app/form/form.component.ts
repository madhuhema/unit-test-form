import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule,Validators,FormGroup,FormBuilder, FormGroupName} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   rform: FormGroup;
  constructor(private fb:FormBuilder) {
    this.rform = fb.group({
      "name":['',Validators.required],
      "price":['',Validators.required],
      "shipping":['',Validators.required]
    })
   }
   
  ngOnInit() {
  }

}
