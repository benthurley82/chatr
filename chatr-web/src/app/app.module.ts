import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppRoutingModule }     from './shared/app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { SigninComponent } from './signin/signin.component';
import { AutosizeDirective } from './shared/autosize.directive';
import { SigninService} from './signin/signin.service';
import { WebSocketService } from './shared/web-socket.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    SigninComponent,
    AutosizeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
    AppRoutingModule
  ],
  providers: [
    SigninService,
    WebSocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
