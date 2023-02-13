import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  arr:any=[];
  // formdata:any;
  constructor () {}
 
myform=new FormGroup({
  fname:new FormControl("",[(Validators.required)]),
  femail:new FormControl("",[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')],),
  fphone:new FormControl("",[(Validators.required)]),
  fpass:new FormControl("",[(Validators.required)]),
  fdob:new FormControl("",[(Validators.required)]),
  fdomain:new FormControl("",[(Validators.required)]),
  fskill:new FormControl("",[(Validators.required)]),
  fcheck:new FormControl("",[(Validators.required)])
})

ngOnInit(): void {
 
}
get form_control()
{
  return this.myform.controls;
}

  postdata()
  {
    let formdata=this.myform.getRawValue();
    console.log(formdata);
    this.arr.push(formdata);
    
    if(this.arr.femail===this.myform.value.femail)
    {
      alert('already');
    }
    else{
      // const emailalready=formdata.find((this.arr)=>{
      //   this.arr.femail===formdata.femail
        
      // })
      console.log(this.arr);
      localStorage.setItem('User',JSON.stringify(this.arr));
      alert('succes');
    }
  }
  
}
  