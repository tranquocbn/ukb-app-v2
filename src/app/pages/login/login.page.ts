import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  CHECK_INFO_AGAIN,
  HTTP_OK,
  MAX_LENGTH_PASSWORD,
  UNAUTHORIZED,
  UNPROCESSABLE_CONTENT,
  PLEASE_WAIT
} from 'src/app/defined/constant.define';
import { AccountService } from 'src/app/providers/account.service';
import { ShareService } from 'src/app/providers/share.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  protected loginForm: FormGroup;
  private subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private accountService: AccountService,
    private shareService: ShareService
  ) { }

  ngOnInit() {
    this.formInit();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public async onHandleLogin() {
    const loading = await this.shareService.loading(PLEASE_WAIT);
    this.subscription = this.accountService.onLogin(this.loginForm.value)
      .pipe(
        catchError(error => of(error))
      )
      .subscribe(account => {
        if (account?.status === HTTP_OK) {
          this.shareService.toast(account?.message, 'success', 'bottom');
          loading.dismiss();
          return this.router.navigate(['dashboard']);
        }
        else if (account?.status === UNPROCESSABLE_CONTENT) {
          const errors: object = account?.error?.errors;
          if (errors) {
            this.shareService.toast(CHECK_INFO_AGAIN, 'danger', 'bottom');
          }
        }
        else if (account?.error?.status === UNAUTHORIZED) {
          this.shareService.toast(account?.error?.message, 'danger', 'bottom');
        }
        loading.dismiss();
      });
  }

  private formInit() {
    this.loginForm = this.formBuilder.group({
      code: [
        '06d4800036',
        Validators.required,
      ],
      password: [
        'password',
        [Validators.required,
        Validators.maxLength(MAX_LENGTH_PASSWORD)]
      ]
    });
  }
}
