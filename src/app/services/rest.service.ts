import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  static ApiPath = '/rest/api.php';

  headers: HttpHeaders;

  constructor(
    private http: HttpClient
  ) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  sendCommand(command: string, body: any): void {

  }

  login(login:string, password:string): Observable<any> {
    return this.http.post(
      RestService.ApiPath,
      {
        action: 'login',
        login,
        password,
      },
      {headers: {...this.headers}}
    );
  }

  /**
   * Запрашивает с сервера сообщения канала
   */
  getChannel(channelId:number, lastVieved:string, callback:Function) {
    const params = (new HttpParams())
      .append("cmd",  "get_channel")
      .append("cid",  channelId.toString())
      .append("lv",   lastVieved);

    this.http.post(RestService.ApiPath, null, {headers: {...this.headers}, params:params}).subscribe(
      input => {
        this.logInput(input);
        if (callback)
          callback(input);
      },
      (err: HttpErrorResponse) => {
        console.error(err.error);
      }
    )
  }

  /**
   * Запрашивает с сервера сообщения одного треда
   */
  getThread(threadId:number, lastVieved:string, callback:Function) {
    const params = (new HttpParams())
      .append("cmd",  "get_thread")
      .append("tid",  threadId.toString())
      .append("lv",   lastVieved);

    this.http.post(RestService.ApiPath, null, {headers: {...this.headers}, params:params}).subscribe(
      input => {
        this.logInput(input);
        if (callback)
          callback(input);
      },
      (err: HttpErrorResponse) => {
        console.error(err.error);
      }
    )
  }

  logInput(input:object) {
    console.log('⯇ ' + JSON.stringify(input));
  }
}
