import { Component, OnInit } from '@angular/core';
import { Validator,FormBuilder, NgForm, FormGroup, Validators, FormArray, FormControl} from '@angular/forms'

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  private rootFormGroup: FormGroup;
  private mobiles = [
    'Touch Screen',
    'QWERTY',
    'No Touch',
    '9 Digits'
  ];

  constructor(formBuilder: FormBuilder) {

    this.rootFormGroup = formBuilder.group({
      nameGroup: formBuilder.group({
        firstName: formBuilder.control('', [Validators.required]),
        email: formBuilder.control('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])
      }),
      lastName: formBuilder.control('', [Validators.required]),
      mobileType : formBuilder.control('', [Validators.required]),
      nums : formBuilder.array([
        formBuilder.control('9762548833',[Validators.required,this.mobileValidator]),
        formBuilder.control('9762548822',[Validators.required,this.mobileValidator])
      ])
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.rootFormGroup);
  }

  addOtherNum() {
    (<FormArray>this.rootFormGroup.controls['nums']).push(new FormControl('',[Validators.required,this.mobileValidator]));
  }

  mobileValidator(formControl : FormControl) : {[key : string] : boolean} {
    return formControl.value.length == 10 ? null : {
      valid : true
    };    
  }
}
