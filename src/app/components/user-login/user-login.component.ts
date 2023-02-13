import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  form=new FormGroup({
    email:new FormControl("",[(Validators.required)]), 
    Password:new FormControl("",[(Validators.required)]), 
  })
}
