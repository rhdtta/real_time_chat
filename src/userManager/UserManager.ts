import { connection } from "websocket";

export interface User {
    userId: string,
    roomId: string,
    name: string,
    ws: connection
}

interface Room {
    users: User[]
}

export class UserManager {
    private rooms: Map<string, Room>;

    constructor() {
        this.rooms = new Map<string, Room>;
    }

    addUser(roomId: string, userId: string, name: string, ws: connection) {
        if(!this.rooms.get(roomId)) {
            this.rooms.set(roomId, {
                users: []
            })
        }

        this.rooms.get(roomId)?.users.push({
            userId: userId,
            roomId: roomId,
            name: name,
            ws: ws
        });

        ws.on('close', (reasonCode, desc) => {
            this.removeUser(userId, roomId);
        })
    }

    removeUser(userId: string, roomId: string) {
        if(!this.rooms.get(roomId)) {
            return;
        }

        this.rooms.get(roomId)?.users.filter(({userId}) => userId != userId);
    }

    getUser(roomId: string, userId: string) {
        if(!this.rooms.get(roomId)) {
            return;
        }

        return this.rooms.get(roomId)?.users.find(({userId}) => userId == userId);
    }
}