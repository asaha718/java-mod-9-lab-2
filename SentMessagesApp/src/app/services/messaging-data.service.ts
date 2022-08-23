import { Injectable, EventEmitter } from "@angular/core";
import { LoggingService } from "./logging.service";
import { Message } from "../models/message.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MessagingDataService {
    private senderMessages: Message[] = [
        // {
        //     sender: { firstName: "Ludovic" },
        //     text: "Message from Ludovic",
        //     conversationId: 1,
        //     sequenceNumber: 0,
        // },
        // {
        //     sender: { firstName: "Jessica" },
        //     text: "Message from Jessica",
        //     conversationId: 1,
        //     sequenceNumber: 1,
        // },
    ];

    private userMessages: Message[] = [
        // {
        //     sender: { firstName: "Aurelie" },
        //     text: "Message from Aurelie",
        //     conversationId: 1,
        //     sequenceNumber: 2,
        // },
    ];

    userMessagesChanged = new EventEmitter<Message[]>();
    senderMessagesChanged = new EventEmitter<Message[]>();

    getSenderMessages() {
        this.httpClient
            .get<Message[]>("http://localhost:8080/api/get-sender-messages")
            .subscribe((messages: Message[]) => {
                console.log(messages);
                this.senderMessages = messages;
                this.senderMessagesChanged.emit(this.senderMessages);
            });
        return this.senderMessages.slice();
    }

    getUserMessages() {
        return this.userMessages.slice();
    }

    addUserMessage(newMessage: Message) {
        this.userMessages.push(newMessage);
        this.userMessagesChanged.emit(this.userMessages.slice());
    }

    constructor(private loggingSvce: LoggingService
        , private httpClient: HttpClient) {
        loggingSvce.log("Messaging Data Service constructor completed");
    }
}