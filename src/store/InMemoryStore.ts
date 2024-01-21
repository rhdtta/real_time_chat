import { connection } from "websocket";
import { User } from "../userManager/User";




export interface Chat {
    name: string,
    userId: string,
    roomId: string,
    message: string,
    upvote: number
}

export interface Room {
    roomId: string,
    users: User[],
    chats: Chat[]
}

export class Store {
    private store: Map<string, Room>;

    constructor() {
        this.store = new Map<string, Room>;
    }


}