import { Component } from '@angular/core';
import { ReactiveFormsModule,FormsModule,FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;
  userLogin = {
    "email": "",
    "password": ""
  }

    constructor(private formbuilder:FormBuilder){}
      ngOnInit(){
        this.loginForm = this.formbuilder.group({
          email: ["", [Validators.required, Validators.email]],
          password: ["", [Validators.required, Validators.minLength
          (6)
          ]]
        });

      }
      
  summitLogin(){
      this.submitted = true;
      if(this.loginForm.invalid){
        return
      }else{
        this.userLogin.email =
        this.loginForm.value.email

        this.userLogin.password =
        this.loginForm.value.password
        if(this.userLogin.email == "admin@gmail.com" && 
          this.userLogin.password == "123456789"
        ){
          alert("เข้าสู่ระบบสำเร็จ")
        }else{
          alert("เข้าสู่ระบบไม่สำเร็จ")
        }
      }
      }

  resetForm(){
    this.submitted = true;
    this.loginForm.reset();
  }

}
