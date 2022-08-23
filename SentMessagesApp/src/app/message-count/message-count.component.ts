import { Component, OnInit } from '@angular/core';
import { MessagingDataService } from '../services/messaging-data.service';
import { Message } from '../models/message.model';

@Component({
  selector: 'app-message-count',
  templateUrl: './message-count.component.html',
  styleUrls: ['./message-count.component.css']
})
export class MessageCountComponent implements OnInit {
  sentMessageCount = 0;

  constructor(private messagingSvce: MessagingDataService) { }

  ngOnInit(): void {
    this.messagingSvce.userMessagesChanged.subscribe((messages: Message[]) => {
      this.sentMessageCount = messages.length;
    });
  }
}
