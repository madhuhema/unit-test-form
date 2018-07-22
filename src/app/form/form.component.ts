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
      "shipping":['',[Validators.required,Validators.min(100)]],
       "data" :['',[Validators.required,Validators.pattern('^[0-9]*$')]]
    })
   }
    fizzBuzz(num) {
    var n= num;
    var ans=" ";
    for(var i=1;i<=n;i++)
    {
        if(i % 3 == 0 && i % 5 !=0 )
            ans+="Fizz,";
        else if(i % 5 == 0 && i % 3 !=0)
            ans+="Buzz,";
        else if(i % 3 == 0 && i % 5 == 0)
            ans+="FizzBuzz,";

    }
    return ans;
}

  ngOnInit() {
  }

}
