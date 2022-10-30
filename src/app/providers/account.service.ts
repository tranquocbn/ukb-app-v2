import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from '../defined/constant.define';
import { IAccount } from '../models/account.model';


@Injectable()
export class AccountService {
    constructor(private httpClient: HttpClient) {}

    public onLogin(account: IAccount): Observable<any> {
        return this.httpClient.post(`${URL}/login`, account);
    }
}
