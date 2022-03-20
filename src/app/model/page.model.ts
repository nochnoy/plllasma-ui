import { Message } from './message.model';
import { Utils } from '../utils';

export class Page {
    public type: PageType = PageType.Channel;
    public id: number;
    public parentId: number;
    public name: string;
    public timeChanged: string;
    public timeViewed: string;
    public children = new Array<Page>();
}

export enum PageType {
    Channel = 0,
    WebLink = 1
}
