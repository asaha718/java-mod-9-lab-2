import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { HeaderComponent } from './header/header.component';
import { ConversationControlComponent } from './conversation-control/conversation-control.component';
import { SenderMessageComponent } from './sender-message/sender-message.component';
import { UserMessageComponent } from './user-message/user-message.component';
import { ConversationThreadComponent } from './conversation-thread/conversation-thread.component';
import { SendMessageComponent } from './send-message/send-message.component';

import { LoggingService } from './services/logging.service';
import { MessageCountComponent } from './message-count/message-count.component';
import { ConversationHistoryComponent } from './conversation-history/conversation-history.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    HeaderComponent,
    ConversationControlComponent,
    SenderMessageComponent,
    UserMessageComponent,
    ConversationThreadComponent,
    SendMessageComponent,
    MessageCountComponent,
    ConversationHistoryComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
