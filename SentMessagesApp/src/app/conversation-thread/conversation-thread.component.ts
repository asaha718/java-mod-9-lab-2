import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message.model';
import { MessagingDataService } from '../services/messaging-data.service';

@Component({
  selector: 'app-conversation-thread',
  templateUrl: './conversation-thread.component.html',
  styleUrls: ['./conversation-thread.component.css']
})
export class ConversationThreadComponent implements OnInit {
  senderMessages!: Message[];
  userMessages!: Message[];

  constructor(private messagingSvce: MessagingDataService) { }

  ngOnInit(): void {
    this.senderMessages = this.messagingSvce.getSenderMessages();
    this.messagingSvce.senderMessagesChanged.subscribe((messages: Message[]) => {
      console.log("********** sender messages have changed");
      this.senderMessages = messages;
    });

    this.userMessages = this.messagingSvce.getUserMessages();
    this.messagingSvce.userMessagesChanged.subscribe((messages: Message[]) => {
      console.log("********** user messages have changed");
      this.userMessages = messages;
    });
  }

  onDeleteSenderMessage(id: number) {
  
    if (this.senderMessages.length > 1) {
      this.senderMessages.splice(id, 1)
    } else {
      this.senderMessages = [];
    }
    console.log("sender messages", this.senderMessages)

  }

  onDeleteUserMessage(id: number) {
  
    if (this.userMessages.length > 1) {
      this.userMessages.splice(id, 1)
    } else {
      this.userMessages = [];
    }
    console.log("user messages", this.userMessages)
  }
}
