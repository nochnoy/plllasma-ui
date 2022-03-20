import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {IUser} from "../model/user.model";
import {RestService} from "./rest.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authorized$ = new BehaviorSubject<boolean>(false);

  constructor(
    restService: RestService,
  ) { }

  login() : Observable<IUser> {

  }
}
