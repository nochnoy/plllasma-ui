import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
    //
    // private readonly channels: Map<number, Channel> = new Map<number, Channel>();
    // private readonly pagesMap: Map<number, Page> = new Map<number, Page>();
    // public readonly rootPages: Array<Page> = new Array<Page>();
    //
    // public colorBg = '#F4E5D7';
    // public colorText = '#313e41';
    // public colorDigest = '#ADA99A';
    //
    // private headers: HttpHeaders;
    //
    // public get status() {
    //     return this._status;
    // }
    // public set status(status: SessionStatus) {
    //     if (status !== this._status) {
    //         this._status = status;
    //         this.statusSubject.next(status);
    //     }
    // }
    // private _status:SessionStatus = SessionStatus.UNITIALIZED;
    // public statusSubject = new Subject<SessionStatus>();
    // public get isAuthorized():boolean {
    //     return this.status == SessionStatus.AUTHORIZED;
    // }
    //
    // constructor(
    //     private http: HttpClient
    // ) {
    //     this.headers = new HttpHeaders({
    //         'Content-Type': 'application/json; charset=utf-8',
    //     });
    //     console.log('Will be connecting to ' + TopSecret.ApiPath);
    // }
    //
    // public getOrCreateChannel(id: number): Channel {
    //     var channel = this.channels.get(id);
    //     if (!channel) {
    //         channel = new Channel();
    //         this.channels.set(id, channel);
    //     }
    //     return channel;
    // }
    //
    // public getOrCreatePage(id: number): Page {
    //     var page = this.pagesMap.get(id);
    //     if (!page) {
    //         page = new Page();
    //         page.id = id;
    //         this.pagesMap.set(id, page);
    //     }
    //     return page;
    // }
    //
    // /**
    //  * Команда серверу
    //  */
    // public sendCommand(commandName: string, params: object, callback: () => {}) {
    //
    //     let httpParams = (new HttpParams());
    //     httpParams = httpParams.append('cmd',  commandName);
    //
    //     let paramsS = '';
    //     for (let key in params) {
    //         httpParams = httpParams.append(key, params[key]);
    //         paramsS += ' ' + key + '=' + params[key];
    //     }
    //
    //     console.log('⮞⮞ ' + commandName + ':' + paramsS);
    //
    //     this.http.post(
    //         TopSecret.ApiPath,
    //         null,
    //         {
    //             headers: this.headers,
    //             params: httpParams,
    //             responseType: 'text',
    //             withCredentials: true // With Credentials!
    //         }
    //     ).subscribe(
    //         (json) => {
    //             console.groupCollapsed('⮜⮜ ' + commandName);
    //             console.log(json);
    //             console.groupEnd();
    //             let result: any = null;
    //             try {
    //                 result = JSON.parse(json);
    //             }
    //             catch(e) {
    //                 result = {"error": "JSON is not parseable: " + json};
    //             }
    //
    //             // Сначала даём понюхать глобальному хуку
    //             if (result)  {
    //                 this.globalCommandHook(result);
    //             }
    //
    //             // Потом инициатору запроса
    //             if (result && callback) {
    //                 callback(result);
    //             }
    //         },
    //         (err: HttpErrorResponse) => {
    //             alert('HTTP Error: ' + err.url + ': ' + err.message);
    //             console.error('HTTP Error: ' + err.url + ': ' + err.message);
    //         }
    //     );
    // }
    //
    // /**
    //  * Глобальный хук сообщений.
    //  * Дёргается каждый раз, когда с сервера приходят данные.
    //  * Тут можно ловить события типа разавторизации.
    //  */
    // private globalCommandHook(input:any) {
    //
    //     // debug log
    //     // Выведем серверные логи
    //
    //     if (input.log) {
    //         console.group('Server logs:');
    //         for (var msg of input.log as Array<string>) {
    //             console.log('🌸 ' + msg);
    //         }
    //         console.groupEnd();
    //     }
    //
    //     // status
    //     // Проверим авторизацию
    //
    //     if (input.status) {
    //         if (input.status.authorized) {
    //             this.status = SessionStatus.AUTHORIZED;
    //         } else {
    //             this.status = SessionStatus.UNAUTHORIZED;
    //         }
    //     }
    //
    //     // channels
    //     // Пришёл список страниц для главного меню
    //
    //     if (input.channels) {
    //         this.pagesMap.clear();
    //         this.rootPages.length = 0;
    //         const a = input.channels.channels as Array<any>;
    //         let page: Page;
    //         for (const item of a) {
    //
    //             // Добавим такую страницу в меню
    //             page = this.getOrCreatePage(item['id']);
    //             page.type = PageType.Channel;
    //             page.parentId = parseInt(item['pid']);
    //             page.name = item['name'];
    //             page.timeChanged = item['d'];
    //             page.timeViewed = item['v'];
    //
    //             // Если это страница верхнего уровня - добавим в список
    //             if (!page.parentId)
    //                 this.rootPages.push(page);
    //
    //             // Обновим/создадим канал (если это страница канала)
    //             if (page.type == PageType.Channel) {
    //                 var channel = this.getOrCreateChannel(page.id);
    //                 channel.timeViewed = page.timeViewed;
    //             }
    //         }
    //     }
    // }
    //
    // /**
    //  * Вызывается при старте приложения. Лезет на сервер, пытается авторизоваться по ключу.
    //  */
    // public startSession()
    // {
    //     this.status = SessionStatus.PENDING;
    //     this.sendCommand('start', {});
    // }
    //
    // /**
    //  * Аутентификация
    //  */
    // public login(login:string, password:string, callback: Function = null)
    // {
    //     this.sendCommand('login', {login: login, password:password}, (result) => {
    //         if (result.status && result.status.authorized) {
    //             this.startSession();
    //             if (callback)
    //                 callback();
    //         }
    //     });
    // }
    //
    // /**
    //  * Аутентификация
    //  */
    // public logOut(callback: Function = null)
    // {
    //     this.sendCommand('log_out', {}, callback);
    // }
    //
    // /**
    //  * Запрашивает с сервера сообщения канала
    //  */
    // public loadChannel(channelId: number, lastVieved: string, callback: Function) {
    //     this.sendCommand('get_channel', {cid: channelId.toString(), lv: lastVieved}, callback);
    // }
    //
    // /**
    //  * Запрашивает с сервера сообщения одного треда
    //  */
    // public loadThread(threadId: number, lastVieved: string, callback: Function) {
    //     this.sendCommand('get_thread', {tid: threadId.toString(), lv: lastVieved}, callback);
    // }
    //
    // /**
    //  * Запрашивает с сервера список страниц для левого меню
    //  */
    // public loadChannels(lastVieved: string, callback: Function) {
    //     this.sendCommand('get_channels', {lv: lastVieved}, callback);
    // }

}
