import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FormComponent test', () => {
    let component: FormComponent;
    let fixture: ComponentFixture<FormComponent>;
    let pattern = null;
    beforeEach(async() => {
      TestBed.configureTestingModule({
        declarations: [ FormComponent ],
        imports: [FormsModule,ReactiveFormsModule]
      }).compileComponents();
      fixture = TestBed.createComponent(FormComponent);
      component = fixture.componentInstance;

    })
  // checking whether the component is defined or not 
    it('is form component defined', () => {
    expect(component).toBeDefined();
  });
  // checking whether the form fields does not hold null values
  it('is form invalid when empty',() => {
    //arrange
    let itemName = component.rform.controls["name"];
    //act
    itemName.setValue("Mobile");
    let itemPrice = component.rform.controls["price"];
    itemName.setValue("10000");
    let itemShipping = component.rform.controls["shipping"];
    itemName.setValue("100");
    //assert
    expect(component.rform.valid).not.toBeTruthy();
  });
  // checks whether the form is invalid if the price is less than 5000
  it('is form invalid when price less than 5000',() => {
    let itemName = component.rform.controls["name"];
    itemName.setValue("Mobile");
    //we have set the price below 5000 
    let itemPrice = component.rform.controls["price"];
    itemPrice.setValue("1000");
    let itemShipping = component.rform.controls["shipping"];
    itemShipping.setValue("100");
    expect(component.rform.valid).toBeFalsy();
    //test fails
    expect(component.rform.controls["price"].valid).toBeFalsy();
    //check which validation has failed
    expect(itemPrice.errors["min"]).toBeDefined();
  })
  it('is form invalid when minimum length of name is not greater than or equal to 3',() => {
    let itemName = component.rform.controls["name"];
    //we have set the name with length less than 3
    itemName.setValue("Mo");
    let itemPrice = component.rform.controls["price"];
    itemPrice.setValue("10000");
    let itemShipping = component.rform.controls["shipping"];
    itemShipping.setValue("100");
    expect(component.rform.valid).toBeFalsy();
    //test fails
    expect(component.rform.controls["name"].valid).toBeFalsy();
    //check which validation has failed
    //expect(itemName.errors["minLength"]).toBeDefined();
  })
  //unit test for custom validator
  it('is form invalid when product price is not divisible by 10',() => {
    let itemName = component.rform.controls["name"];
    //we have set the name with length less than 3
    itemName.setValue("Mobile");
    let itemPrice = component.rform.controls["price"];
    itemPrice.setValue("5555");
    let itemShipping = component.rform.controls["shipping"];
    itemShipping.setValue("100");
    expect(component.rform.valid).toBeFalsy();
    //test fails
    expect(component.rform.controls["price"].valid).toBeFalsy();
    //check which validation has failed
    expect(component.rform.controls["price"].errors["invalidPrice"]).toBeDefined();
  })
  it('is form invalid when  name field does not match pattern',() => {
    let itemName = component.rform.controls["name"];
    //we have set the name with length less than 3
    itemName.setValue("Mobile123");
    let itemPrice = component.rform.controls["price"];
    itemPrice.setValue("10000");
    let itemShipping = component.rform.controls["shipping"];
    itemShipping.setValue("100");
    expect(component.rform.valid).toBeFalsy();
    //test fails
    expect(component.rform.controls["name"].valid).toBeFalsy();
    //expect(itemName.errors["pattern"]).toBeDefined();
  })
});
