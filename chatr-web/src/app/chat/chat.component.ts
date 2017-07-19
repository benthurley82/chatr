import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from '../shared/message';
import { User } from '../shared/user';
import { SigninService } from '../signin/signin.service';
import { ChatService} from './chat.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit, OnDestroy {

  msgSub: Subscription;
  messages: Message[];
  loggedInSub: Subscription;
  onlineUsers: User[];
  privateConversations: string[] = ['1', '2'];

  displayName: string;
  message: string;

  constructor(private signinService: SigninService,
              private chatService: ChatService) { }

  ngOnInit() {
    this.displayName = this.signinService.getDisplayName();
    this.message = '';
    this.messages = [];
    this.msgSub = this.chatService.subscribeMessages().subscribe(message => {
      this.messages.push(message);
    });
    this.loggedInSub = this.chatService.subscribeOnlineUsers().subscribe(users => {
      this.onlineUsers = users;
      console.log(JSON.stringify(this.onlineUsers));
    });
    this.chatService.joinChat(this.displayName);
  }

  ngOnDestroy() {
    this.msgSub.unsubscribe();
    this.loggedInSub.unsubscribe();
  }

  sendMessage(): void {
    let message = new Message(this.displayName, this.message);
    this.chatService.sendMessage(message);
    this.messages.push(message);
    this.message = '';
  }

}
