import { connection } from "websocket"

export enum messageEnums {
    init_user= "INIT_USER",
    incoming_message= "INCOMING_MESSAGE",
    outgoing_message= "OUTGOING_MESSAGE"
}

export type MessageType = {
    type: string,
    payload: InitMessagePayload
} | {
    type: string,
    payload: IncomingMessagePayload
} | {
    type: string,
    payload: OutgoingMessagePayload
}

type InitMessagePayload = {
    userId: string,
    roomId: string,
    name: string,
    ws: connection
}
type IncomingMessagePayload = {
    userId: string,
    roomId: string
}
type OutgoingMessagePayload = {
    userId: string,
    roomId: string
}