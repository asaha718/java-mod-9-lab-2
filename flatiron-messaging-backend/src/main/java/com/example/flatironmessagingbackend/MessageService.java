package com.example.flatironmessagingbackend;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

@Service
public class MessageService {
    private static List<Message> userMessages = List.of(new Message(
            new User("Aurelie"),
            "Message from Lilly",
            1, 2));
    private static final List<Message> senderMessages = List.of(new Message(
            new User("Ludovic"),
            "Message from Ludo",
            1, 0),
            new Message(
                    new User("Jessica"),
                    "Message from Jess",
                    1, 1));

    public List<Message> getUserMessages() {
        return userMessages;
    }

    public List<Message> getSenderMessages() {
        return senderMessages;
    }

    public List<Message> deleteUserMessage(Message message) {
        userMessages = userMessages.stream()
                .filter(messages -> messages.getConversationId().equals(message.getConversationId()))
                .collect(Collectors.toList());
        return userMessages;
    }
}
