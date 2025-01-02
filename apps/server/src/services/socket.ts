import { Server } from "socket.io";

class SocketService{
    private _io: Server;

    constructor(){
        console.log('Init Socket server...');
        this._io = new Server();
    }

    get io(){
        return this._io;
    }
}

export default SocketService;