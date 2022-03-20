import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor() { }

  public login(login:string, password:string, callback: Function = null)
  {
      this.sendCommand('login', {login: login, password:password}, (result) => {
          if (result.status && result.status.authorized) {
              this.startSession();
              if (callback)
                  callback();
          }
      });
  }
}
