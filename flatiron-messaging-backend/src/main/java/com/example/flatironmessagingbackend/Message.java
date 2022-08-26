package com.example.flatironmessagingbackend;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
class Message {
    public User sender;
    public String text;
    public Integer conversationId;
    public Integer sequenceNumber;

    public Message(User sender, String text, int conversationId, int sequenceNumber) {
        this.sender = sender;
        this.text = text;
        this.conversationId = conversationId;
        this.sequenceNumber = sequenceNumber;
    }

}