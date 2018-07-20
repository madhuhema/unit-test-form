import { AbstractControl } from "@angular/forms";

export function PriceValidator(control:AbstractControl){
    if(((control.value) % 10) != 0){
        return { invalidPrice : true};
    }
}