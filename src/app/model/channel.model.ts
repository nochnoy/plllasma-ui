import { Message } from './message.model';
import { Thread } from './thread.model';

export class Channel {

    public threads: Array<Thread>;
    private threadsById: Map<number, Thread>;
    
    public timeViewed: string;

    public deserialize(input: any) {
        let i: number;
        let j: number;
        let rawMessage: any;
        let rawChildren: Array<any>;
        let t: Thread;
        let threadId: number;
        const threadsById = new Map<number, Thread>();
        let digest: Thread;
        const starredTrees = new Array<Thread>();

        this.threads = new Array<Thread>();

        // Бежим по сообщениям и распихиваем их по тредам

        for (i = 0; i < input.messages.length; i++) {
            rawMessage = input.messages[i];
            threadId = rawMessage.tid || rawMessage.id; // Если у сообщения нет tid значит он сам рут треда
            t = threadsById.get(threadId);
            if (!t) {
                t = new Thread(threadId, this);
                threadsById.set(threadId, t);
                this.threads.push(t);
            }
            t.addMessage(rawMessage);
        }

        // Бежим по тредам, сортируем их внутренности и выбираем звезданутые

        for (i = 0; i < this.threads.length; i++) {
            t = this.threads[i];
            t.sort();
            if (t.root) {
                if (t.root.commentsCount > 0) {
                    t.setCommentsCount(t.root.commentsCount);
                }
                if (t.starred.length) {
                    starredTrees.push(t);
                }
            } else {
                console.warn('Ignoring child of unexistent root message ' + t.rootId);
            }
        }

        // Бежим по деревьям со звёздочками, создаём серые дайджесты

        for (i = 0; i < starredTrees.length; i++) {
            t = starredTrees[i];
            if (t.root.isStarred) {
                // Если само рутовое сообщение звезданутое - то нет смысла для него делать дайджест
                t.isExpanded = true; // тупо раскроем его
            } else {
                digest = t.buildDigest();
                this.threads.unshift(digest);
            }
        }

        // Сортируем канал - вверху дайджесты, дальше всё по убыванию id

        this.threads.sort((a: Thread, b: Thread): number => {
            if (a.isDigest && !b.isDigest) {
                return -1;
            } else if (!a.isDigest && b.isDigest) {
                return 1;
            } else if (a.isDigest && b.isDigest) {
                if (a.starredMaxId > b.starredMaxId) {
                    return -1;
                } else if (a.starredMaxId < b.starredMaxId) {
                    return 1;
                } else {
                    return 0;
                }
            } else if (!a.isDigest && !b.isDigest) {
                if (a.rootId > b.rootId) {
                    return -1;
                } else if (a.rootId < b.rootId) {
                    return 1;
                } else {
                    return 0;
                }
            }
        });

    }
}
