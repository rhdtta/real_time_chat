import { connection } from "websocket";
import { Room } from "../store/InMemoryStore";
import { User } from "./User";




export class UserManager {
    private room: Map<string, Room>;

    constructor() {
        this.room = new Map<string, Room>;
    }

    addUser(roomId: string, user: User) {

    }

    removeUser() {

    }

    getUser() {

    }
}