import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FormComponent test', () => {
    let component: FormComponent;
    let fixture: ComponentFixture<FormComponent>;
    beforeEach(async() => {
      TestBed.configureTestingModule({
        declarations: [ FormComponent ],
        imports: [FormsModule,ReactiveFormsModule]
      }).compileComponents();
      fixture = TestBed.createComponent(FormComponent);
      component = fixture.componentInstance;

    })
    it('is form component defined', () => {
    expect(component).toBeDefined();
  });
  it('is form valid when empty',() => {
    let itemName = component.rform.controls["name"];
    itemName.setValue("Mobile");
    let itemPrice = component.rform.controls["price"];
    itemName.setValue("10000");
    let itemShipping = component.rform.controls["shipping"];
    itemName.setValue("100");
    expect(component.rform.valid).not.toBeNull();
  });
});
