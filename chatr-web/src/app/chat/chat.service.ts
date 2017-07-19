import { Injectable } from '@angular/core';
import { WebSocketService } from '../shared/web-socket.service';
import { Message } from '../shared/message';
import { User } from '../shared/user';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

  constructor(private webSocketService: WebSocketService) { }

   joinChat(displayName: string): void {
     ///this.socket.emit('chat join', displayName);
   }

  sendMessage(message: Message): void {
    this.webSocketService.getSocket().emit('chat message', message);
  }

  subscribeMessages(): Observable<Message> {
    let observable = new Observable(observer => {
      this.webSocketService.getSocket().on('chat message', (data) => {
        observer.next(data);
      });
      return () => {
        this.webSocketService.getSocket().disconnect();
      };
    });
    return observable;
  }

  subscribeOnlineUsers(): Observable<User[]> {
    let observable = new Observable(observer => {
      this.webSocketService.getSocket().on('chat online', (data) => {
        // Remove current user from list of online users
        let myid: string = this.webSocketService.getSocket().id;
        console.log('My ID: ' + myid);
        let pos: number = data.map(function(user: User) {
          return user.id;
        }).indexOf(myid);
        data.splice(pos, 1);
        observer.next(data);
      });
      return () => {
        this.webSocketService.getSocket().disconnect();
      };
    });
    return observable;
  }

}
