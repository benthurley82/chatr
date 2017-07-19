import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class WebSocketService {

  private socket: SocketIOClient.Socket;

  constructor() { }

  connect(): void {
    this.socket = io({'path': '/ws'});
  }

  getSocket(): SocketIOClient.Socket {
    return this.socket;
  }

}
