import { server as WebSocketServer} from 'websocket';
import http from 'http';
import { UserManager } from './userManager/UserManager';
import { Store } from './store/InMemoryStore';
import { MessageType, messageEnums } from './message/Message';

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});

const userManager = new UserManager();
const store = new Store();

const wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false // true => the control will never reach .on('request', ...)
});

wsServer.on('request', function(request) {
    
    var connection = request.accept('echo-protocol', request.origin);

    console.log((new Date()) + ' Connection accepted.');
    connection.on('message', function(message) {
        try {
            messageHandler()
        } catch(e) {

        }
    });
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});


function messageHandler(message: MessageType) {
    if(message.type == messageEnums.init_user) {
        userManager.addUser(payload.roomId)
    }

    if(message.type == messageEnums.incoming_message) {

    }

    if(message.type == messageEnums.outgoing_message) {

    }

}