import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {IUser} from "../model/user.model";
import {RestService} from "./rest.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authorized$ = new BehaviorSubject<boolean>(false);

  constructor(
    public restService: RestService,
  ) { }

  login(login:string, password:string) : Observable<IUser> {
    return this.restService.login(login, password);
  }
}
