import { connection } from "websocket";

export interface User {
    userId: string,
    roomId: string,
    name: string,
    ws: connection
}

export class User {
    private user: User;

    constructor(userId: string, roomId: string, name: string, ws: connection) {
        this.user = new User(userId, roomId, name, ws);
        console.log(this.user);
    }

}