import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  form: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = new FormGroup({
      login: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onLogin(): void {
    const form = this.form.getRawValue();
    this.authService.login(form.login, form.password).pipe(
      untilDestroyed(this)
    ).subscribe();
  }

}
