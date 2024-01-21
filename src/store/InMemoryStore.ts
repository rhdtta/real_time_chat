import { User } from "../userManager/UserManager";

let globalChatIndex = 0;

export interface Chat {
    name: string,
    userId: string,
    chatId: string,
    message: string,
    upvote: string[]
}

export interface Room {
    roomId: string,
    chats: Chat[]
}

export class Store {
    private store: Map<string, Room>;

    constructor() {
        this.store = new Map<string, Room>;
    }

    addChat(roomId: string, userId: string, message: string, name: string) {
        if(!this.store.get(roomId)) {
            this.store.set(roomId, {
                roomId,
                chats: []
            })
        }

        if(!this.store.get(roomId)) return;

        this.store.get(roomId)?.chats.push({
            chatId: (globalChatIndex++).toString(),
            userId,
            message,
            name,
            upvote: []
        })
    }

    upvote(chatId: string, userId: string, roomId: string) {
        if(!this.store.get(roomId)) return [];

        this.store.get(roomId)?.chats.find(({chatId}) => chatId == chatId)?.upvote.push(userId);
    }

    getChat(roomId: string, limit: number, offset: number) {
        if(!this.store.get(roomId)) return [];

        return this.store.get(roomId)?.chats.slice().reverse().slice(offset, offset+limit);
    }


}