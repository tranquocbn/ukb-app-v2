import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  protected loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formInit();
  }

  public onHandleLogin() {
    console.log(this.loginForm);
  }

  private formInit() {
    this.loginForm = this.formBuilder.group({
      username: ['',],
      password: ['',]
    });
  }
}
