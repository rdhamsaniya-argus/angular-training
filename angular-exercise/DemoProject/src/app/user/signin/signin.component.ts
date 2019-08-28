import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
@Injectable({ providedIn: 'root' })
export class SigninComponent implements OnInit {

  angForm: FormGroup;

  constructor(private auth: AuthService, private myRoute: Router, private fb: FormBuilder, private toastr: ToastrManager) { }
  ngOnInit() {
    if (this.auth.isLoggednIn()) {
      this.myRoute.navigate(["/dashboard"]);
    }

    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z]{2}[a-zA-Z ]{0,16}[a-zA-Z]{2}$')
      ])],
      password: ['', Validators.compose([
        Validators.required

      ])]
    });
  }

  checkLogin() {
    if (this.angForm.get('username').value == 'username' && this.angForm.get('password').value == 'password') {
      this.auth.sendToken('asdas');
      this.myRoute.navigate(["/dashboard"]);
    }
    else { }
  }


}
export function patternValidator(regexp: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const value = control.value;
    if (value === '') {
      return null;
    }
    return !regexp.test(value) ? { 'patternInvalid': { regexp } } : null;
  };
}
