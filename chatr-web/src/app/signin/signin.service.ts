import { Injectable } from '@angular/core';
import { WebSocketService } from '../shared/web-socket.service';
import * as io from 'socket.io-client';

@Injectable()
export class SigninService {

  private displayName: string;

  constructor(private webSocketService: WebSocketService) { }

  signin(displayName: string): void {
    this.displayName = displayName;
    this.webSocketService.connect();
    this.webSocketService.getSocket().emit('chat join', displayName);
  }

  getDisplayName(): string {
    return this.displayName;
  }

}
